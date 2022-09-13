//This function will build an array of sideLength x sideLength cells
export const buildInitialGrid = (sideLength) => {
    const numberSideLength = Number(sideLength);
    if (
        isNaN(numberSideLength) ||
        numberSideLength < 5 ||
        Array.isArray(sideLength) ||
        numberSideLength !== Number(numberSideLength.toFixed(0))
    ) {
        throw new Error(
            'SideLength must be a positive integer less than or equal to 5'
        );
    }

    let outerArray = [];

    for (let i = 0; i < sideLength; i++) {
        outerArray.push([]);
    }

    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            outerArray[i].push([0]);
        }
    }

    return outerArray;
};
