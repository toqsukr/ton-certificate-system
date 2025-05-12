import { toNano } from '@ton/core';
import { ManagerNFT } from '../wrappers/ManagerNFT';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const managerNFT = provider.open(await ManagerNFT.fromInit());

    await managerNFT.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(managerNFT.address);

    // run methods on `managerNFT`
}
