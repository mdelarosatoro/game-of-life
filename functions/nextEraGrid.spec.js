import { buildInitialGrid } from './buildInitialGrid';
import { nextEraGrid } from './nextEraGrid';
import { setInitialLivingCells } from './setInitialLivingCells';

describe('Given the nextEraGrid function', () => {
    describe('When passing a square grid and initial coordinates', () => {
        const initialCoordinates = [
            [0, 1],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ];
        const initialGrid = buildInitialGrid(6, initialCoordinates);
        const gameGrid = setInitialLivingCells(initialGrid, initialCoordinates);

        const resultGrid = [
            [[0], [0], [0], [0], [0], [0]],
            [[1], [0], [1], [0], [0], [0]],
            [[0], [1], [1], [0], [0], [0]],
            [[0], [1], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0], [0]],
        ];

        test('Gives the correct next grid', () => {
            expect(nextEraGrid(gameGrid)).toEqual(resultGrid);
        });
    });
});
