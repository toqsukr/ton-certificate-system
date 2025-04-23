import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/certificate_manager.tact',
    options: {
        debug: true,
    },
};
