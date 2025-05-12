import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/manager-nft.tact',
    options: {
        debug: true,
    },
};
