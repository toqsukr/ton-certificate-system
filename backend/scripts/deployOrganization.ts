import { toNano } from '@ton/core';
import { Organization } from '../wrappers/Organization';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const organization = provider.open(await Organization.fromInit());

    await organization.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(organization.address);

    // run methods on `organization`
}
