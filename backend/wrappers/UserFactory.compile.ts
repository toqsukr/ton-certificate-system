import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/user-factory.tact',
    options: {
        debug: true,
    },
};
