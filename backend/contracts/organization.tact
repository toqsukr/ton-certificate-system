message(0xd53276db) Excesses {}

struct OrgData {
    owner: Address;
    wallet: Address;
    publicKey: Int as uint256
}

struct MintCertBody {
    certOwner: Address;
    content: Slice;
    seqno: Int as uint32;
}

message(0x988d4037) MintCertRequest {
    signature: Slice as bytes64;
    requestBody: MintCertBody;
}

contract Organization {
    const DUPLICATE_MSG: Int = 701;
    const OWNER_ONLY: Int = 703;
    const NON_COMPARED_SIGNATURE: Int = 704;

    seqno: Int;
    orgData: OrgData;

    init(orgData: OrgData) {
        self.seqno = 0;
        self.orgData = orgData;
    }

    get fun getOrgData(): OrgData {
        return self.orgData
    }

    receive(msg: MintCertRequest) {
        throwUnless(self.OWNER_ONLY, sender() == self.orgData.owner);

        throwUnless(self.DUPLICATE_MSG, msg.requestBody.seqno == self.seqno);
        self.seqno += 1;

        throwUnless(
            self.NON_COMPARED_SIGNATURE,
            checkSignature(msg.requestBody.toCell().hash(), msg.signature, self.orgData.publicKey)
        );

        // ZHESTKII MINTING
        // deploy(DeployParameters {
        //     value: ton("0.05"),
        //     init: initOf User(userData),
        // });
        // 
        // let nftData = NFTTransfer {
        //     queryId: 42,
        //     newOwner: msg.requestBody.certOwner,
        //     responseDestination: myAddress(),
        //     forwardAmount: 1,
        // }.toCell()

        // send(SendParameters {
        //     to: nftData.hash(),
        //     value: ton("0.1"),
        //     body: nftData,
        // });
        
        message(MessageParameters {
            to: sender(),
            value: 0,
            mode: SendRemainingValue | SendIgnoreErrors,
            body: Excesses {}.toCell(),
        });
    }
}
