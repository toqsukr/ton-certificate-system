import "./organization";

message OrgInitRequest {
    content: Cell;
    wallet: Address;
    publicKey: Int as uint256;
}

contract OrganizationFactory {
    const TOO_FEW_COINS: Int = 700;

    receive(msg: OrgInitRequest) {
        throwUnless(self.TOO_FEW_COINS, context().value >= ton("0.1"));
        
        deploy(DeployParameters {
            init:  initOf Organization(msg.content, sender(), msg.wallet, publicKey),
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
