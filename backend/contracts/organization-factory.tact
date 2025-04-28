import "./organization";

message OrgInitData {
    wallet: Address;
    seqno: Int as uint32;
    publicKey: Int as uint256;
}

contract OrganizationFactory {
    const TOO_FEW_COINS: Int = 700;
    const DUPLICATE_MSG: Int = 701;

    seqno: Int;

    init() {
        self.seqno = 0;
    }

    receive(msg: OrgInitData) {
        throwUnless(self.TOO_FEW_COINS, context().value >= ton("0.1"));
        
        throwUnless(self.DUPLICATE_MSG, msg.seqno == self.seqno);
        self.seqno += 1;

        let orgInit: OrgData = OrgData {owner: sender(), publicKey: msg.publicKey, wallet: msg.wallet};

        deploy(DeployParameters {
            init:  initOf Organization(orgInit),
            value: ton("0.05"),
        });

        message(MessageParameters {
            to: sender(),
            value: 0,
            mode: SendRemainingValue | SendIgnoreErrors,
            body: Excesses {}.toCell(),
        });
    }

    receive() { cashback(sender()) }
}
