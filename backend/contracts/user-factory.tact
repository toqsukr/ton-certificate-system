import "@stdlib/deploy";

contract User with Deployable {
    persistent owner: Address;
    persistent data: Cell;  // Данные храним в Cell вместо String

    init(owner: Address) {
        self.owner = owner;
        self.data = emptyCell();
    }

    // Бинарное обновление данных
    receive(msg: UpdateDataMessage) {
        require(context.sender == self.owner, "Not owner");
        require(checkSignature(msg.data, msg.signature), "Invalid signature");
        self.data = msg.data;
    }

    fun checkSignature(data: Cell, signature: Slice): Bool {
        return verifySignature(data.hash(), signature, self.owner);
    }

    // Структура бинарного сообщения
    message UpdateDataMessage {
        data: Cell;
        signature: Slice as "signature";
    }
}

contract UserFactory with Deployable {
    // Бинарное сообщение для создания
    message CreateUserMessage {
        salt: Int as uint32? = 0;  // Опциональный salt для разных контрактов
    }

    receive(msg: CreateUserMessage) {
        let userAddress = calculateUserAddress(context.sender, msg.salt);
        if (getDeployed(userAddress)) return;

        let user = User(context.sender);
        send(SendParameters{
            to: userAddress,
            value: toNano("0.5"),
            stateInit: user.stateInit,
            body: emptyCell()
        });
    }
}

fun calculateUserAddress(owner: Address, salt: Int): Address {
    let data = beginCell()
        .storeAddress(owner)
        .storeUint(salt, 32)
        .endCell();
    
    let user = User{owner = owner, initData = data};
    return user.address;
}