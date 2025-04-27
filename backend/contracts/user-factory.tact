import "@stdlib/deploy";
import "./user.tact";

message(0xd53276db) Excesses {}

message CreateUserRequest {
    wallet: Address;
    seqno: Int as uint32;
    publicKey: Int as uint256;
}

contract UserFactory {
    const TOO_FEW_COINS: Int = 700;
    const DUPLICATE_MSG: Int = 701;

    seqno: Int;

    init() {
        self.seqno = 0;
    }

    external(msg: CreateUserRequest) {
        throwUnless(self.TOO_FEW_COINS, context().value >= ton("0.1"));

        throwUnless(self.DUPLICATE_MSG, msg.seqno == self.seqno);
        self.seqno += 1;

        let userData = UserData{
            orgs: null,
            wallet: msg.wallet,
            publicKey: msg.publicKey,
        };

        deploy(DeployParameters {
            value: ton("0.05"),
            init: initOf User(userData),
        });

        message(MessageParameters {
            value: 0,
            to: sender(),
            body: Excesses {}.toCell(),
            mode: SendRemainingValue | SendIgnoreErrors,
        });
    }

    receive() { cashback(sender()) }
}