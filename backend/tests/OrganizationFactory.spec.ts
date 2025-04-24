import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { OrganizationFactory } from '../wrappers/OrganizationFactory';
import '@ton/test-utils';

describe('OrganizationFactory', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let organizationFactory: SandboxContract<OrganizationFactory>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        organizationFactory = blockchain.openContract(await OrganizationFactory.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await organizationFactory.send(
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
            to: organizationFactory.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and organizationFactory are ready to use
    });
});
