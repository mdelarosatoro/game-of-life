import { setInitialLivingCells } from './setInitialLivingCells';

describe('Given the function setInitialLivingCells', () => {
    describe('When the function is given a valid grid and array of coordinates', () => {
        const testGrid = [
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
        ];

        const answerGrid = [
            [[0], [0], [0], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [0], [0], [0]],
        ];

        const initialCoordinates = [
            [1, 2],
            [2, 2],
            [3, 2],
        ];

        test('Should return a new grid with the coordinates set as 1', () => {
            expect(setInitialLivingCells(testGrid, initialCoordinates)).toEqual(
                answerGrid
            );
        });
    });
    describe('When given a set of coordinates that is outside the grid', () => {
        test('Should throw an error', () => {
            const testGrid = [
                [[0], [0], [0], [0], [0]],
                [[0], [0], [0], [0], [0]],
                [[0], [0], [0], [0], [0]],
                [[0], [0], [0], [0], [0]],
                [[0], [0], [0], [0], [0]],
            ];

            const initialCoordinates = [
                [7, 8],
                [3, 2],
                [13, 22],
            ];
            expect(() =>
                setInitialLivingCells(testGrid, initialCoordinates)
            ).toThrow(
                'Invalid coordinates, they must be withing the grid coordinates'
            );
        });
    });
});
