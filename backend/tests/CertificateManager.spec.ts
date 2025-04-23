import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { CertificateManager } from '../wrappers/CertificateManager';
import '@ton/test-utils';

describe('CertificateManager', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let certificateManager: SandboxContract<CertificateManager>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        certificateManager = blockchain.openContract(await CertificateManager.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await certificateManager.send(
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
            to: certificateManager.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and certificateManager are ready to use
    });
});
