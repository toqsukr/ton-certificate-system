import "@stdlib/deploy";

// Сообщение для запроса выпуска NFT
message MintNFT {
    owner: Address; // Кто получит NFT
    content: String; // Метаданные (ссылка на JSON)
}

contract Organization {
    persistent storage: {
        id: Int as uint32;
        name: String;
        orgPublicKey: Int as uint256; // храним ключ кошелька
    };

    init(name: String, publicKey: Int) {
        self.storage.name = name;
        self.storage.ownerPublicKey = publicKey;
    }

    // Добавление пользователя (только для admin)
    receive("add_user", user: Address) {
        require(sender() == self.storage.admin, "Not admin");
        self.storage.users.add(user);
    }

    // Функция выпуска NFT
    receive("mint_cert", msg: MintNFT) {
        // Проверяем, что отправитель == admin
        require(sender() == self.storage.admin, "Not admin");

        // Создаем NFT и отправляем владельцу
        let nft = NFT.std();
        nft.mint(
            owner = msg.owner, // Владелец из сообщения
            content = msg.content, // Метаданные (например, IPFS ссылка)
        );

        // Отправляем NFT на адрес владельца
        send(SendParameters{
            to: msg.owner,
            value: 0.1 TON, // Газ для обработки
            body: nft.asMessage(),
        });
    }
}

message OrgInitData {
    name: String;
    publicKey: Int as uint256; // Добавляем публичный ключ в сообщение из фронта
}

contract OrganizationFactory with Deployable {
    receive("create_org", data: OrgInitData) {
        let org = Organization(data);

        send(SendParameters{
            to: org.address,
            value: toNano("0.5"),
            body: beginCell().storeUint(0, 32).endCell(),
            stateInit: org.stateInit
        });
    }
}