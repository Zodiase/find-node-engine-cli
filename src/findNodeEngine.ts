import { minVersion } from 'semver';
import { PackageShape } from './packageShape';

export const DefaultResult = 'default';

export default function findNodeEngine(pkg: PackageShape): string {
    const nodeEngineRange = pkg?.engines?.node;

    if (typeof nodeEngineRange === 'undefined') {
        return DefaultResult;
    }

    const minVer = minVersion(nodeEngineRange);

    if (!minVer) {
        return DefaultResult;
    }

    return minVer.format();
}
