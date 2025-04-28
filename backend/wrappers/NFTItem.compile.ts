import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/nft-item.tact',
    options: {
        debug: true,
    },
};
