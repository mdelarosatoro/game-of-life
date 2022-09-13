export const decideCellNextState = (
    oldGrid,
    newGrid,
    livingCellsBeside,
    coordinates
) => {
    if (oldGrid[coordinates[0]][coordinates[1]][0] == [1]) {
        if (livingCellsBeside < 2 || livingCellsBeside > 3) {
            newGrid[coordinates[0]][coordinates[1]] = [0];
        } else if (livingCellsBeside === 3 || livingCellsBeside === 2) {
            newGrid[coordinates[0]][coordinates[1]] = [1];
        }
    } else if (oldGrid[coordinates[0]][coordinates[1]][0] == [0]) {
        if (livingCellsBeside === 3) {
            newGrid[coordinates[0]][coordinates[1]] = [1];
        }
    }

    return newGrid;
};
