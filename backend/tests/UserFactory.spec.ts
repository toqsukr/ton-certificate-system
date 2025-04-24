import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { UserFactory } from '../wrappers/UserFactory';
import '@ton/test-utils';

describe('UserFactory', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let userFactory: SandboxContract<UserFactory>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        userFactory = blockchain.openContract(await UserFactory.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await userFactory.send(
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
            to: userFactory.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and userFactory are ready to use
    });
});
