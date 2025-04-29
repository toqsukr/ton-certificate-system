import "@stdlib/deploy";
import "@stdlib/ownable";
import "./nft-item";

message(0xd53276db) Excesses {}

struct CollectionData {
    next_index: Int;
    content: Cell;
    owner: Address;
}

struct OrgData {
    content: Cell;
    owner: Address;
    wallet: Address;
    publicKey: Int as uint256;
    next_index: Int as uint256;
}

contract Organization with Ownable, Deployable {
    const INVALID_INDEX: Int = 701;
    const NON_COMPARED_SIGNATURE: Int = 703;

    init(
        content: Cell, 
        owner: Address,
        wallet: Address, 
        publicKey: Int as uint256, 
    ) {
        self.owner = owner;
        self.next_index = 0;
        self.wallet = wallet;
        self.content = content;
        self.publicKey = publicKey;
    }

    get fun get_org_data(): OrgData {
        return OrgData {
            content: self.content, 
            next_index: self.next_index, 
            owner: self.owner, 
            publicKey: self.publicKey, 
            wallet: self.wallet
        }
    }

    receive(msg: RequestNftDeploy) {
        self.requireOwner();
        throwUnless(self.INVALID_INDEX, msg.index <= self.next_index);
        let nft_init: StateInit = initOf NftItem(myAddress(), msg.index);
        let nft_address: Address = contractAddress(nft_init);
        message(MessageParameters{
            to: nft_address,
            value: msg.amount,
            mode: SendPayGasSeparately,
            bounce: false,
            data: nft_init.data,
            code: nft_init.code,
            body: NftDeploy{
                index: msg.index,
                owner: msg.owner,
                content: msg.content,
            }.toCell()
        });
        if(msg.index == self.next_index) {
            self.next_index += 1;
        }
    }

    get fun get_collection_data(): CollectionData {
        return CollectionData{next_index: self.next_index, content: self.content, owner: self.owner};
    }
    get fun get_nft_address_by_index(index: Int): Address {
        return contractAddress(initOf NftItem(myAddress(), index));
    }
    get fun get_nft_content(index: Int, individual_content: Cell): Cell {
        return individual_content;
    }
}
