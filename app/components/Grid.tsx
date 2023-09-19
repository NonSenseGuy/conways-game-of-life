import React from 'react';

interface GridProps {
    grid: number[][];
    cellSize: number;
    onCellClick: (rowIndex: number, colIndex: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, cellSize, onCellClick }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateRows: `repeat(${grid.length}, ${cellSize}px)`,
                gridTemplateColumns: `repeat(${grid[0].length}, ${cellSize}px)`,
                border: '1px solid #000',
            }}
        >
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => onCellClick(rowIndex, colIndex)}
                        style={{
                            width: cellSize,
                            height: cellSize,
                            backgroundColor: grid[rowIndex][colIndex] === 0 ? 'white' : 'black',
                            border: '1px solid #ccc',
                        }}
                    />
                ))
            )}
        </div>
    );
};

export default Grid;
