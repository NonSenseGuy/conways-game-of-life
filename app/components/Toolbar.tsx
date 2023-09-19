import React from "react";

interface ToolBarProps {
    toggleGame: () => void;
    clearGrid: () => void;
    randomGrid: () => void;
    running: boolean;
    generation: number
}

const Toolbar: React.FC<ToolBarProps> = ({ toggleGame,clearGrid, randomGrid, generation, running}) => {
    return (
        <div className="flex content-center">
            <button
                className="border-black px-4"
                onClick={toggleGame}
            >
                {running ? "Stop" : "Start"}
            </button>
            <button
                className="border-black px-4"
                onClick={clearGrid}
            >
                Clear
            </button>
            <button
                className="border-black px-4"
                onClick={randomGrid}
            >
                Random
            </button>
            <div className="px-8">Gen: {generation}</div>

        </div>
    )
}

export default Toolbar;
