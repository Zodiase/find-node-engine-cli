/**
 * The fields we care about in `package.json`.
 * Note that most of these are or can be optional.
 */
export interface PackageShape {
    engines?: {
        node?: string;
    };
}
