import "@stdlib/deploy";

struct OrgData {
    name: String;
    admin: Address;
    wallet: Address;
}

message MintNFT {
    owner: Address;
    content: String;
    signature: Slice;
}

contract Organization(orgData: OrgData) {

    // receive(user: Address) {
    //     require(context.sender == self.orgData.admin, "Not admin");
    // }

    // receive("mint_cert", msg: MintNFT) {
    //     require(context.sender == self.orgData.admin, "Not admin");

    //     let data = beginCell()
    //         .storeAddress(msg.owner)
    //         .storeString(msg.content)
    //         .endCell();
        
    //     require(
    //         verifySignature(data.hash(), msg.signature, self.orgData.admin),
    //         "Invalid signature"
    //     );

    //     let nft = NFT.std();
    //     nft.mint(
    //         owner = msg.owner,
    //         content = msg.content
    //     );

    //     send(SendParameters{
    //         to: msg.owner,
    //         value: toNano("0.1"),
    //         body: nft.asMessage(),
    //         bounce: false
    //     });
    // }
}

message OrgInitData {
    name: String;
    wallet: Address;
}

contract OrganizationFactory with Deployable {
    receive(msg: OrgInitData) {
        let ctx = context();
        throwUnless(1024, ctx.value >= ton("0.1"));

        let orgInit: OrgData = OrgData {admin: ctx.sender, name: msg.name, wallet: msg.wallet};

        deploy(DeployParameters {
            init:  initOf Organization(orgInit),
            value: ton("0.05"),
        });

        cashback(ctx.sender);
    }
}
