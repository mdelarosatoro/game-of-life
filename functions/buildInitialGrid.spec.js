import { buildInitialGrid } from './buildInitialGrid';

describe('Given the buildInitialGrid function', () => {
    describe('When given a valid number as side length', () => {
        const sideLength = 5;
        const resultGrid = [
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
        ];

        test('Should return an array', () => {
            expect(Array.isArray(buildInitialGrid(sideLength))).toBe(true);
        });

        test('Should be of length sideLength', () => {
            expect(buildInitialGrid(sideLength).length).toBe(sideLength);
        });

        test('Should be equal to resultGrid', () => {
            expect(buildInitialGrid(sideLength)).toEqual(resultGrid);
        });
    });
    describe('When given a value that is not a positive integer bigger than or equal to 5', () => {
        test('Should throw an error', () => {
            const sideLength = 3;
            expect(() => buildInitialGrid(sideLength)).toThrow(
                'SideLength must be a positive integer less than or equal to 5'
            );
        });
        test('Should throw an error', () => {
            const sideLength = 'a';
            expect(() => buildInitialGrid(sideLength)).toThrow(
                'SideLength must be a positive integer less than or equal to 5'
            );
        });
        test('Should throw an error', () => {
            const sideLength = null;
            expect(() => buildInitialGrid(sideLength)).toThrow(
                'SideLength must be a positive integer less than or equal to 5'
            );
        });
        test('Should throw an error', () => {
            const sideLength = undefined;
            expect(() => buildInitialGrid(sideLength)).toThrow(
                'SideLength must be a positive integer less than or equal to 5'
            );
        });
        test('Should throw an error', () => {
            const sideLength = NaN;
            expect(() => buildInitialGrid(sideLength)).toThrow(
                'SideLength must be a positive integer less than or equal to 5'
            );
        });
        test('Should throw an error', () => {
            const sideLength = [6];
            expect(() => buildInitialGrid(sideLength)).toThrow(
                'SideLength must be a positive integer less than or equal to 5'
            );
        });
    });
});
