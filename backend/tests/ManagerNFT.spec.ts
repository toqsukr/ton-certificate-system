import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { ManagerNFT } from '../wrappers/ManagerNFT';
import '@ton/test-utils';

describe('ManagerNFT', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let managerNFT: SandboxContract<ManagerNFT>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        managerNFT = blockchain.openContract(await ManagerNFT.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await managerNFT.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: managerNFT.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and managerNFT are ready to use
    });
});
