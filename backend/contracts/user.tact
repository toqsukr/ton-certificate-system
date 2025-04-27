struct Array {
    m: map<Int as uint16, Int>;
    length: Int = 0; 
}

struct UserData {
    publicKey: Int as uint256;
    wallet: Address;
    orgs: Array?;
}

contract User(userData: UserData) {
    const MAX_ORGS_NUM: Int = 5;
    const TOO_MUCH_ORGS: Int = 800;

    get fun getUserData(): UserData {
        return self.userData;
    }

    receive() { cashback(sender()) }
}
