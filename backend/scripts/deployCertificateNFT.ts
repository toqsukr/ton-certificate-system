import { toNano } from '@ton/core';
import { CertificateNFT } from '../wrappers/CertificateNFT';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const certificateNFT = provider.open(await CertificateNFT.fromInit());

    await certificateNFT.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(certificateNFT.address);

    // run methods on `certificateNFT`
}
