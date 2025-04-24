import "@stdlib/deploy";

contract User {
    persistent storage: {
        id: Int as uint32;
        userPublicKey: Int as uint256; // храним ключ кошелька
    };

    init(publicKey: Int) {
        self.storage.ownerPublicKey = publicKey;
    }

    receive("approve_request", requestId: Int, certData: String) {
        require(sender() == self.storage.owner, "Not owner");

        send(SendParameters{
            to: self.storage.org,
            value: toNano("0.15"), // Газ для минта + комиссия
            body: beginCell()
                .storeUint(0x5678, 32) // op-code для "mint_certificate"
                .storeAddress(self.address) // user
                .storeString(certData)
                .endCell()
        });
    }

    get fun get_public_key(): Int {
        return self.storage.ownerPublicKey;
    }
}

message UserInitData {
    name: String;
    surname: String;
    publicKey: Int as uint256; // Добавляем публичный ключ в сообщение из фронта
}

contract UserFactory with Deployable {
    receive("create_user", data: UserInitData) {
        let user = User(data.name, data.surname, data.publicKey);
        
        send(SendParameters{
            to: user.address,
            value: toNano("0.5"),
            body: beginCell().storeUint(0, 32).endCell(),
            stateInit: user.stateInit
        });
    }
}
