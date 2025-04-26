import "@stdlib/deploy";

struct UserData {
    name: String;
    surname: String;
    owner: Address;
}

message UpdateDataMessage {
    name: String;
    surname: String;
    signature: Slice;
}

contract User(userData: UserData) {
    get fun getUserData(): UserData {
        return self.userData;
    }

    receive(msg: UpdateDataMessage) {
        throwUnless(1024, sender() == self.userData.owner);

        // let data = beginCell()
        //     .storeUint(0x5555, 16) 
        //     .storeUint(0, 8)
        //     .storeSlice(msg.name.asSlice())
        //     .storeUint(0, 8)
        //     .storeSlice(msg.surname.asSlice())
        //     .endCell();
    
        // require(verifySignature(data.hash(), msg.signature, self.userData.owner), "Invalid signature");

        self.userData.name = msg.name;
        self.userData.surname = msg.surname;
    }
}

message CreateUserMessage {
    name: String;
    surname: String;
    signature: Slice;
}

contract UserFactory with Deployable {
    receive(msg: CreateUserMessage) {
        let ctx = context();
        throwUnless(1024, ctx.value >= ton("0.1"));

        let userData = UserData{
            name: msg.name,
            surname: msg.surname,
            owner: ctx.sender
        };

        deploy(DeployParameters {
            init: initOf User(userData),
            value: ton("0.05"),
        });

        cashback(sender())
    }
}