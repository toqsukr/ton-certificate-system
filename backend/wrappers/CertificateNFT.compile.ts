import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/certificate-nft.tact',
    options: {
        debug: true,
    },
};
