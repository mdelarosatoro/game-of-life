import { buildInitialGrid } from './buildInitialGrid.js';
import { setInitialLivingCells } from './setInitialLivingCells.js';
import { nextEraGrid } from './nextEraGridv2.js';

const gridContainer = document.querySelector('.main__grid-container');
const startBtn = document.querySelector('.main__start-button');
const stopBtn = document.querySelector('.main__stop-button');
const clearBtn = document.querySelector('.main__clear-button');
const randomBtn = document.querySelector('.main__random-button');
const gridRangeDOM = document.querySelector('.main__grid-size-range');
const gridRangeValueDOM = document.querySelector('.main__range-value');
const speedRangeDOM = document.querySelector('.main__speed-range');

const libraryIcon = document.querySelector('.header__icon--library');
const overlayLibraryContainer = document.querySelector(
    '.overlay__library-container'
);
const overlayLibraryExitButton = document.querySelector(
    '.overlay__library-exit-button'
);
const libraryItemHandshake = document.querySelector(
    '.overlay__library-img--handshake'
);
const libraryItemDiamond = document.querySelector(
    '.overlay__library-img--diamond'
);
const libraryItemGlidersDozen = document.querySelector(
    '.overlay__library-img--gliders-dozen'
);

const infoIcon = document.querySelector('.header__icon--info');
const overlayInfoContainer = document.querySelector('.overlay__info-container');
const overlayInfoExitButton = document.querySelector(
    '.overlay__info-exit-button'
);

const overlay = document.querySelector('.overlay');

const initialGridLength = 10;
const emptyInitialGrid = buildInitialGrid(initialGridLength);

let initialCoordinates = [];

let gameStartGrid = emptyInitialGrid;
let currentGrid = gameStartGrid;

const DOMBuildGrid = (gameGrid) => {
    const gridLength = gameGrid.length;
    for (let i = 0; i < gridLength; i++) {
        const row = document.createElement('div');
        row.classList.add('main__grid-row');
        for (let j = 0; j < gridLength; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `cell-${i}-${j}`);
            if (gameGrid[i][j][0] == [0]) {
                cell.classList.add('main__grid-cell');
            } else if (gameGrid[i][j][0] == [1]) {
                cell.classList.add('main__grid-cell');
                cell.classList.add('main__grid-cell--active');
            }
            cell.addEventListener('click', (e) => {
                const cellId = e.target.getAttribute('id');
                const splitCellId = cellId.split('-');
                const myCoordinates = [splitCellId[1], splitCellId[2]];
                const indexOfCoordinate = initialCoordinates.findIndex(
                    (coordinate) =>
                        JSON.stringify(coordinate) ==
                        JSON.stringify(myCoordinates)
                );
                console.log(initialCoordinates);
                if (indexOfCoordinate === -1) {
                    initialCoordinates.push(myCoordinates);
                } else if (indexOfCoordinate !== -1) {
                    initialCoordinates.splice(indexOfCoordinate, 1);
                }
                const newGrid = buildInitialGrid(gridRangeDOM.value);
                gameStartGrid = setInitialLivingCells(
                    newGrid,
                    initialCoordinates
                );
                currentGrid = gameStartGrid;
                gridContainer.innerHTML = '';
                DOMBuildGrid(gameStartGrid);
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
};

console.log(gridContainer);

DOMBuildGrid(gameStartGrid);

const DOMChangeGrid = (oldGrid) => {
    const gridLength = oldGrid.length;
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < gridLength; j++) {
            const cell = document.querySelector(`#cell-${i}-${j}`);
            cell.className = '';
            if (oldGrid[i][j][0] == [0]) {
                cell.classList.add('main__grid-cell');
            } else if (oldGrid[i][j][0] == [1]) {
                cell.classList.add('main__grid-cell');
                cell.classList.add('main__grid-cell--active');
            }
        }
    }
};

let gameLoop;
let speed = speedRangeDOM.value;

const startGame = () => {
    gameLoop = setInterval(() => {
        currentGrid = nextEraGrid(currentGrid);
        console.log(currentGrid);
        DOMChangeGrid(currentGrid);
    }, speed);
    startBtn.classList.add('hide');
    stopBtn.classList.remove('hide');
};

speedRangeDOM.addEventListener('change', () => {
    speed = speedRangeDOM.value;
    clearInterval(gameLoop);
    startGame();
});

startBtn.addEventListener('click', startGame);

stopBtn.addEventListener('click', () => {
    clearInterval(gameLoop);
    startBtn.classList.remove('hide');
    stopBtn.classList.add('hide');
});

const clearGrid = () => {
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = [];
    gridContainer.innerHTML = '';
    currentGrid = newGrid;
    DOMBuildGrid(currentGrid);
};

gridRangeDOM.addEventListener('change', (e) => {
    console.log(e.target.value);
    clearGrid();
    gridRangeValueDOM.textContent = e.target.value;
    gridContainer.innerHTML = '';
    const newEmptyGrid = buildInitialGrid(e.target.value);
    const newStartGrid = setInitialLivingCells(
        newEmptyGrid,
        initialCoordinates
    );
    currentGrid = newStartGrid;
    DOMBuildGrid(newStartGrid);
});

clearBtn.addEventListener('click', clearGrid);

randomBtn.addEventListener('click', () => {
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = [];
    for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
            const myCoordinates = [i, j];
            const randomNumber = Math.random();
            const living = randomNumber > 0.5 ? true : false;
            if (living) initialCoordinates.push(myCoordinates);
        }
    }
    currentGrid = setInitialLivingCells(newGrid, initialCoordinates);
    gridContainer.innerHTML = '';
    DOMBuildGrid(currentGrid);
});

libraryIcon.addEventListener('click', () => {
    overlay.classList.remove('hide');
    overlayLibraryContainer.classList.remove('hide');
});

overlayLibraryExitButton.addEventListener('click', () => {
    overlay.classList.add('hide');
    overlayLibraryContainer.classList.add('hide');
});

infoIcon.addEventListener('click', () => {
    overlay.classList.remove('hide');
    overlayInfoContainer.classList.remove('hide');
});

overlayInfoExitButton.addEventListener('click', () => {
    overlay.classList.add('hide');
    overlayInfoContainer.classList.add('hide');
});

libraryItemHandshake.addEventListener('click', () => {
    const coords = [
        [15, 15],
        [15, 16],
        [16, 14],
        [16, 16],
        [16, 17],
        [17, 13],
        [17, 14],
        [17, 16],
        [18, 14],
        [18, 15],
    ];
    gridRangeDOM.value = 30;
    gridRangeValueDOM.textContent = gridRangeDOM.value;
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = coords;
    currentGrid = setInitialLivingCells(newGrid, initialCoordinates);
    gridContainer.innerHTML = '';
    DOMBuildGrid(currentGrid);
});

libraryItemDiamond.addEventListener('click', () => {
    const coords = [
        [13, 14],
        [13, 15],
        [13, 16],
        [13, 17],
        [15, 12],
        [15, 13],
        [15, 14],
        [15, 15],
        [15, 16],
        [15, 17],
        [15, 18],
        [15, 19],
        [17, 10],
        [17, 11],
        [17, 12],
        [17, 13],
        [17, 14],
        [17, 15],
        [17, 16],
        [17, 17],
        [17, 18],
        [17, 19],
        [17, 20],
        [17, 21],
        [19, 12],
        [19, 13],
        [19, 14],
        [19, 15],
        [19, 16],
        [19, 17],
        [19, 18],
        [19, 19],
        [21, 14],
        [21, 15],
        [21, 16],
        [21, 17],
    ];
    const newCoords = coords.map((element) => [element[0] - 2, element[1] - 1]);
    gridRangeDOM.value = 30;
    gridRangeValueDOM.textContent = gridRangeDOM.value;
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = newCoords;
    currentGrid = setInitialLivingCells(newGrid, initialCoordinates);
    gridContainer.innerHTML = '';
    DOMBuildGrid(currentGrid);
});

libraryItemGlidersDozen.addEventListener('click', () => {
    const coords = [
        [15, 13],
        [15, 14],
        [15, 17],
        [16, 13],
        [16, 17],
        [17, 13],
        [17, 16],
        [17, 17],
    ];
    const newCoords = coords.map((element) => [element[0] + 3, element[1] + 4]);
    gridRangeDOM.value = 40;
    gridRangeValueDOM.textContent = gridRangeDOM.value;
    const newGrid = buildInitialGrid(gridRangeDOM.value);
    initialCoordinates = newCoords;
    currentGrid = setInitialLivingCells(newGrid, initialCoordinates);
    gridContainer.innerHTML = '';
    DOMBuildGrid(currentGrid);
});
