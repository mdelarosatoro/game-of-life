import { decideCellNextState } from './decideCellNextState';

describe('Given the decideCellNextState function', () => {
    describe('When given an oldGrid, newGrid, livingCellsBeside, coordinates', () => {
        const oldGrid = [
            [[0], [0], [0], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [0], [0], [0]],
        ];
        let newGrid = [
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
        ];
        const myCoordinates = [2, 2];
        const livingCellsBeside = 2;
        const expectedNewGrid = [
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [1], [0], [0]],
            [[0], [0], [0], [0], [0]],
            [[0], [0], [0], [0], [0]],
        ];

        test('It should return the correct newGrid', () => {
            expect(
                decideCellNextState(
                    oldGrid,
                    newGrid,
                    livingCellsBeside,
                    myCoordinates
                )
            ).toEqual(expectedNewGrid);
        });
    });
});
