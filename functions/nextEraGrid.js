import { buildInitialGrid } from './buildInitialGrid.js';
import { decideCellNextState } from './decideCellNextState.js';

export const nextEraGrid = (grid) => {
    let newGrid = buildInitialGrid(grid.length);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let livingCellsBeside = 0;
            let myCoordinates = [i, j];

            let myRow = myCoordinates[0];
            let myColumn = myCoordinates[1];

            let coordinatesToCheck = [
                [myRow - 1, myColumn - 1],
                [myRow - 1, myColumn],
                [myRow - 1, myColumn + 1],
                [myRow, myColumn - 1],
                [myRow, myColumn + 1],
                [myRow + 1, myColumn - 1],
                [myRow + 1, myColumn],
                [myRow + 1, myColumn + 1],
            ];

            const filterCoordinatesFunction = (coordinate) => {
                return (
                    coordinate[0] !== -1 &&
                    coordinate[0] !== grid.length &&
                    coordinate[1] !== -1 &&
                    coordinate[1] !== grid.length
                );
            };

            let filteredCoordinates = [];
            filteredCoordinates = coordinatesToCheck.filter(
                filterCoordinatesFunction
            );

            for (const coordinate of filteredCoordinates) {
                if (grid[coordinate[0]][coordinate[1]][0] == [1]) {
                    livingCellsBeside = livingCellsBeside + 1;
                }
            }

            newGrid = decideCellNextState(
                grid,
                newGrid,
                livingCellsBeside,
                myCoordinates
            );
        }
    }

    return newGrid;
};
