import { buildInitialGrid } from './buildInitialGrid.js';
import { nextEraGrid } from './nextEraGridv2.js';
import { setInitialLivingCells } from './setInitialLivingCells.js';

const blankGrid = buildInitialGrid(6);
const initialCoordinates = [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
];
const firstGameGrid = setInitialLivingCells(blankGrid, initialCoordinates);

let currentGrid = firstGameGrid;
console.log(currentGrid);

setInterval(() => {
    currentGrid = nextEraGrid(currentGrid);
    console.log(currentGrid);
}, 500);
