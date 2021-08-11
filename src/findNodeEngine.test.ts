import findNodeEngine from './findNodeEngine';

describe('findNodeEngine', () => {
    it('should return default when node engine is not specified', () => {
        expect(findNodeEngine({})).toBe('default');
        expect(findNodeEngine({ engines: {} })).toBe('default');
    });

    it('should support simple node version ranges', () => {
        expect(findNodeEngine({engines: {node: '12.1.2'}})).toBe('12.1.2');
        expect(findNodeEngine({engines: {node: '>=12'}})).toBe('12.0.0');
    });
});
