import "@stdlib/deploy";

const NOT_DEPLOYED: Int = 1000;
const INVALID_OWNER: Int = 1001;
const INVALID_AMOUNT: Int = 1002;
const min_balance: Int = ton("0.05");
const gas_consumption: Int = ton("0.02");

message(0x5fcc3d14) NftTransfer {
    query_id: Int as uint64;
    new_owner: Address;
    response_destination: Address;
    custom_payload: Cell?;
    forward_amount: Int as coins;
    forward_payload: Slice as remaining;
}

message(0x05138d91) NftOwnershipAssigned {
    query_id: Int as uint64;
    prev_owner: Address;
    forward_payload: Slice as remaining;
}

message(0x6f89f5e3) NftExcesses {
    query_id: Int as uint64;
}

message(0x2fcb26a2) NftGetStaticData {
    query_id: Int as uint64;
}

message(0x8b771735) NftReportStaticData {
    query_id: Int as uint64;
    index: Int as uint256;
    collection: Address;
}

message(0x1f04537a) NftDestroy {
    query_id: Int as uint64;
}

message NftDeploy {
    index: Int as uint256;
    owner: Address;
    content: Cell;
}

message RequestNftDeploy {
    index: Int as uint256;
    amount: Int as coins;
    owner: Address;
    content: Cell;
}

struct NftData {
    deployed: Bool;
    index: Int;
    collection: Address;
    owner: Address;
    content: Cell;
}

trait NftStandart {
    deployed: Bool;
    collection: Address;
    owner: Address;
    index: Int;
    content: Cell;

    receive(msg: NftTransfer) {
        let ctx: Context = context();
        throwUnless(NOT_DEPLOYED, self.deployed);
        throwUnless(INVALID_OWNER, ctx.sender == self.owner);
        let min: Int = min_balance - min(min_balance, myBalance());
        let required: Int = gas_consumption + msg.forward_amount + min;
        if (msg.forward_amount != 0) {
            required += ctx.readForwardFee();
        }
        throwUnless(INVALID_AMOUNT, ctx.value >= required);
        let cashback: Int = ctx.value - gas_consumption - msg.forward_amount - min;
        if (msg.forward_amount != 0) {
            cashback -= ctx.readForwardFee();
            message(MessageParameters{
                to: msg.new_owner,
                value: msg.forward_amount,
                mode: SendPayGasSeparately,
                body: NftOwnershipAssigned{
                    query_id: msg.query_id,
                    prev_owner: self.owner,
                    forward_payload: msg.forward_payload
                }.toCell()
            });
        }
        self.owner = msg.new_owner;
        if (cashback > 0) {
            message(MessageParameters{
                to: msg.response_destination,
                value: cashback,
                body: NftExcesses{
                    query_id: msg.query_id
                }.toCell()
            });
        }
    }
    receive(msg: NftGetStaticData) {
        message(MessageParameters{
            to: sender(),
            value: 0,
            mode: SendRemainingValue,
            body: NftReportStaticData{
                query_id: msg.query_id,
                index: self.index,
                collection: self.collection
            }.toCell()
        });
    }

    get fun get_nft_data(): NftData {
        return NftData{deployed: self.deployed, index: self.index, collection: self.collection, owner: self.owner, content: self.content};
    }
}