"use client";
import React, { useState, useEffect, useRef } from 'react';
import Grid from "./Grid";
import { calculateNextGeneration, emptyGrid, initializeGrid } from '../lib/GameOfLife';
import Toolbar from './Toolbar';

const numRows = 30;
const numCols = 30;
const cellSize = 20;

const GameOfLife: React.FC = () => {
    const [grid, setGrid] = useState<number[][]>(emptyGrid(numRows, numCols));
    const [generation, setGeneration] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    const [intervalID, setIntervalID] = useState<number | null>(null);

    const handleCellClick = (rowIndex: number, colIndex: number) => {
        if (running) {
            return;
        }
        const newGrid = grid.map((row, i) =>
            i === rowIndex ? row.map((cell, j) => (j === colIndex ? 1 - cell : cell)) : row
        );

        setGrid(newGrid);
    }

    const toggleGame = () => {
        if (running) {
            clearInterval(intervalID!);
            setIntervalID(null);
        } else {
            const newIntervalId = setInterval(() => {
                setGrid((prevGrid) => calculateNextGeneration(prevGrid));
                setGeneration((prevGen) => prevGen + 1)
            }, 500);

            setIntervalID(newIntervalId as any);
        }

        setRunning(!running);
    }

    const clearGrid = () => {
        setGrid(emptyGrid(numRows, numCols))
    }

    const randomGrid = () => {
        setGrid(initializeGrid(numRows, numCols))
    }

    useEffect(() => {
        return () => {
            if (intervalID !== null) {
                clearInterval(intervalID);
            }
        }
    }, [intervalID]);

    return (
        <div>
            <Toolbar
                toggleGame={toggleGame}
                clearGrid={clearGrid}
                randomGrid={randomGrid}
                generation={generation}
                running={running}
            />
            <Grid grid={grid} cellSize={cellSize} onCellClick={handleCellClick} />
        </div>
    );
};

export default GameOfLife;
