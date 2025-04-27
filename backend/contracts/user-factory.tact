import "@stdlib/deploy";
import "./user.tact";

message(0xd53276db) Excesses {}

message CreateUserRequest {
    wallet: Address;
    publicKey: Int as uint256;
}

contract UserFactory {
    const TOO_FEW_COINS: Int = 700;

    receive(msg: CreateUserRequest) {
        throwUnless(self.TOO_FEW_COINS, context().value >= ton("0.1"));

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