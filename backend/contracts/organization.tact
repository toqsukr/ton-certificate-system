import "@stdlib/deploy";
import "@stdlib/ownable";
import "./constant";
import "./certificate-nft";

message(0xd53276db) Excesses {}

struct GetOrgData {
    content: Cell;
    owner: Address;
}

message(0xa9930d) AddManagerRequest {
    manager: Address
}

message(0xd31373) RemoveManagerRequest {
    manager: Address
}

contract Organization with Ownable {
    content: Cell;
    owner: Address;
    next_index: Int as uint256;
    wallet_whitelist: map<Address, Bool>;

    init(
        content: Cell, 
        owner: Address,
    ) {
        self.owner = owner;
        self.next_index = 0;
        self.content = content;
        self.wallet_whitelist = emptyMap();
    }

    get fun get_nft_address_by_index(index: Int): Address {
        return contractAddress(initOf CertificateNFT(myAddress(), index));
    }
    get fun get_nft_content(_: Int, individual_content: Cell): Cell {
        return individual_content;
    }

    get fun get_org_data(): GetOrgData {
        return GetOrgData {
            content: self.content, 
            owner: self.owner,
        }
    }

    receive(msg: AddManagerRequest) {
        throwUnless(NON_AUTHORIZED, sender() == self.owner);
        throwUnless(CONFLICT, self.wallet_whitelist.exists(msg.manager));
        self.wallet_whitelist.set(msg.manager, true);
    }

    receive(msg: RemoveManagerRequest) {
        throwUnless(NON_AUTHORIZED, sender() == self.owner);
        let _ = self.wallet_whitelist.del(msg.manager);
    }

    receive(msg: RequestNftDeploy) {
        throwUnless(TOO_FEW_COINS, context().value >= MIN_COINS);
        throwUnless(NON_AUTHORIZED, self.wallet_whitelist.exists(msg.owner));

        let nft_init: StateInit = initOf CertificateNFT(myAddress(), self.next_index);
        let nft_address: Address = contractAddress(nft_init);
        send(SendParameters {
            to: nft_address,
            value: MIN_COINS,
            mode: SendPayGasSeparately,
            bounce: false,
            data: nft_init.data,
            code: nft_init.code,
            body: NftDeploy{
                index: self.next_index,
                owner: msg.owner,
                content: msg.content,
            }.toCell()
        });
      
        self.next_index += 1;
    }

    receive() { cashback(sender()); }
}