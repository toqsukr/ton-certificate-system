import { NetworkProvider } from '@ton/blueprint';
import { toNano } from '@ton/core';
import { OrganizationFactory } from '../wrappers/OrganizationFactory';

export async function run(provider: NetworkProvider) {
    const organizationFactory = provider.open(await OrganizationFactory.fromInit());

    await organizationFactory.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        null,
    );

    await provider.waitForDeploy(organizationFactory.address);

    // run methods on `organizationFactory`
}
