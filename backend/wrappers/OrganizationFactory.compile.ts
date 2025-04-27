import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/organization-factory.tact',
    options: {
        debug: true,
        external: true,
    },
};
