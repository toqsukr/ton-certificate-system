import { NetworkProvider } from '@ton/blueprint';
import { toNano } from '@ton/core';
import { UserFactory } from '../wrappers/UserFactory';

export async function run(provider: NetworkProvider) {
    const userFactory = provider.open(await UserFactory.fromInit());

    await userFactory.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        null,
    );

    await provider.waitForDeploy(userFactory.address);

    // run methods on `userFactory`
}
