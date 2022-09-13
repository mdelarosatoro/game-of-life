export const validateCoordinates = (grid, initialCoordinates) => {
    const gridLength = grid.length;

    initialCoordinates.forEach((coordinate) => {
        if (
            coordinate[0] > gridLength - 1 ||
            coordinate[0] < 0 ||
            coordinate[1] > gridLength - 1 ||
            coordinate[1] < 0
        ) {
            throw new Error(
                'Invalid coordinates, they must be withing the grid coordinates'
            );
        }
    });
};

export const setInitialLivingCells = (grid, initialCoordinates) => {
    validateCoordinates(grid, initialCoordinates);

    let gridCopy = [...grid];
    initialCoordinates.forEach((element) => {
        gridCopy[element[0]][element[1]] = [1];
    });

    return gridCopy;
};
