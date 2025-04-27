import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { User } from '../wrappers/User';
import '@ton/test-utils';

describe('User', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let user: SandboxContract<User>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        user = blockchain.openContract(await User.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await user.send(
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
            to: user.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and user are ready to use
    });
});
