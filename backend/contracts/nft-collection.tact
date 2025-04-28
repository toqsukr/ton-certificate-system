import "@stdlib/deploy";
import "@stdlib/ownable";
import "./nft-item";

struct CollectionData {
    next_index: Int;
    content: Cell;
    owner: Address;
}

contract NftCollection with Ownable, Deployable {
    owner: Address;
    next_index: Int as uint256 = 0;
    content: Cell;

    init(owner: Address, content: Cell) {
        self.owner = owner;
        self.content = content;
    }

    receive(msg: RequestNftDeploy) {
        self.requireOwner();
        require(msg.index <= self.next_index, "Invalid Index");
        let nft_init: StateInit = initOf NftItem(myAddress(), msg.index);
        let nft_address: Address = contractAddress(nft_init);
        send(SendParameters{
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
                royalty_destination: self.royalty_destination,
                numerator: self.numerator,
                denominator: self.denominator
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