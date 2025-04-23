import { toNano } from '@ton/core';
import { CertificateManager } from '../wrappers/CertificateManager';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const certificateManager = provider.open(await CertificateManager.fromInit());

    await certificateManager.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(certificateManager.address);

    // run methods on `certificateManager`
}
