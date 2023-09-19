export function initializeGrid(numRows: number, numCols: number): number[][] {
    const grid = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => Math.random() > 0.7 ? 1 : 0)
    );

    return grid;
}

export function emptyGrid(numRows: number, numCols: number): number[][] {
    const grid = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => 0)
    );

    return grid;
}

export function calculateNextGeneration(currentGrid: number[][]): number[][] {
    const newGrid = emptyGrid(currentGrid.length, currentGrid[0].length);

    currentGrid.forEach((row, i) =>
        row.forEach((cell, j) => {
            const liveNeighbors = countNeighbors(currentGrid, i, j)
            if (cell === 1) {
                if (liveNeighbors === 2 || liveNeighbors === 3) {
                    newGrid[i][j] = 1; // Cell survives
                } else {
                    newGrid[i][j] = 0; // Cell dies
                }
            } else {
                if (liveNeighbors === 3) {
                    newGrid[i][j] = 1; // Dead cell becomes alive
                }
            }
        })
    );

    return newGrid;
}

function countNeighbors(currentGrid: number[][], i: number, j: number): number {
    const numRows = currentGrid.length
    const numCols = currentGrid[0].length

    let liveNeighbors = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) continue;
            const neighborX = i + x;
            const neighborY = j + y;

            if (
                neighborX >= 0 &&
                neighborX < numRows &&
                neighborY >= 0 &&
                neighborY < numCols
            ) {
                liveNeighbors += currentGrid[neighborX][neighborY]
            }
        }
    }
    return liveNeighbors;
}
