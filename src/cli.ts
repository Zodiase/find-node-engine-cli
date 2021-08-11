import { resolve as resolvePath } from 'path';
import findNodeEngine from './findNodeEngine';
import { PackageShape } from './packageShape';

export const run = async (argv: string[]): Promise<void> => {
    // Todo: traverse outwards to find `package.json` in a parent folder?
    const pkgPath = resolvePath(process.cwd(), './package.json');
    const pkg = require(pkgPath) as PackageShape;
    const nodeEngineString = findNodeEngine(pkg);

    process.stdout.write(`${nodeEngineString}\n`);
};
