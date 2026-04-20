import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import GameBoard from "./components/GameBoard";
import QueueTiles from "./components/QueueTiles";
import ScorePanel from "./components/ScorePanel";
import LevelPanel from "./components/LevelPanel";
import Keep from "./components/Keep";
import GameOver from "./components/GameOver";
import { useEffect } from "react";
import catImg from "./assets/Cat.png";



function neighbourVals(r, c) {
  return [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1]
  ].filter(([nr, nc]) => nr >= 0 && nr < 4 && nc >= 0 && nc < 4);
}

export default function Game() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [value, setValue] = useState(Math.floor(Math.random() * 10) + 2);
  const [currValue, setCurrValue] = useState(Math.floor(Math.random() * 10) + 2);
  const [thirdValue, setThirdValue] = useState(Math.floor(Math.random() * 10) + 2);
  const [keepValue, setKeepValue] = useState(null);
  const [trashCount, setTrashCount] = useState(1);
  const [highScore, setHighScore] = useState(() => {
  return Number(localStorage.getItem("bestScore")) || 0;
  });
  const [isGameOver, setIsGameOver] = useState(false);

  const [grid, setGrid] = useState(
    Array(4).fill(null).map(() => Array(4).fill(null))
  );
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("bestScore", score);
    }
  }, [score]);
  function restart(isGameOver) {
    if (!isGameOver) return;

    const newGrid = Array(4).fill(null).map(() => Array(4).fill(null));

    setLevel(1);
    setScore(0);
    const newHigh = Math.max(highScore, score);
    setHighScore(newHigh);
    localStorage.setItem("bestScore", newHigh);
    setValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));
    setCurrValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));
    setThirdValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));
    setKeepValue(null);
    setIsGameOver(false);
    console.log("Game Over! Your score: " + score);

    return setGrid(newGrid);
  }
  
  function isOver(grid) {
    console.log("Checking game over...");

    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if (grid[r][c] === null) return false;

        const neighbours = neighbourVals(r, c);

        for (var i = 0; i < neighbours.length; i++) {
          const [nr, nc] = neighbours[i];

          if (
            grid[nr][nc] !== null &&
            (grid[nr][nc] % grid[r][c] === 0 ||
              grid[r][c] % grid[nr][nc] === 0)
          ) {
            return false;
          }
        }
      }
    }

    console.log("Game over detected.");
    return true;
  }

  function levelUp(score) {
    if (score % 10 === 0) {
      console.log("Level up!");
      setLevel((prev) => prev + 1);
      setTrashCount((c) => c + 1);
    }
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const draggedId = active.id;

    if (!over) return;

    const [r, c] = over.id.split("-").map(Number);
    const isFromKeep = draggedId.startsWith("keep-");
    const neighbours = neighbourVals(r, c);

    console.log("Dragged ID:", draggedId);

    
    
    if (over.id === "trash") {
      if (trashCount === 0) return;

      if (isFromKeep) {
        setKeepValue(null);
        setTrashCount((c) => c - 1);
        return;
      }

      console.log("Trashing value!");
      setTrashCount((c) => c - 1);
      setCurrValue(value);
      setValue(thirdValue);
      setThirdValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));
      return;
    }

    if (over.id === "keep" && keepValue === null) {
      console.log("Keeping value!");

      setKeepValue(currValue);
      setCurrValue(value);
      setValue(thirdValue);
      setThirdValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));
      return;
    }

    if (over.id === "keep" && keepValue !== null) {
      return;
    }

    for (var i = 0; i < neighbours.length; i++) {
      const [nr, nc] = neighbours[i];

      if (isFromKeep) {
        if (
          grid[nr][nc] !== null &&
          (grid[nr][nc] % keepValue === 0 ||
            keepValue % grid[nr][nc] === 0)
        ) {
          console.log("Divisible!");

          setScore((prev) => prev + 1);
          levelUp(score + 1);

          return setGrid((prev) => {
            const newGrid = prev.map((row) => [...row]);

            if (keepValue > newGrid[nr][nc]) {
              newGrid[r][c] = keepValue / newGrid[nr][nc];
              newGrid[nr][nc] = null;
            } else if (keepValue < newGrid[nr][nc]) {
              newGrid[nr][nc] = newGrid[nr][nc] / keepValue;
              newGrid[r][c] = null;
            } else {
              newGrid[r][c] = null;
              newGrid[nr][nc] = null;
            }

            setKeepValue(null);
            setCurrValue(value);
            setValue(thirdValue);
            setThirdValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));

            return newGrid;
          });
        }
      }

      if (
        grid[nr][nc] !== null &&
        (grid[nr][nc] % currValue === 0 ||
          currValue % grid[nr][nc] === 0)
      ) {
        console.log("Divisible!");

        setScore((prev) => prev + 1);
        levelUp(score + 1);

        return setGrid((prev) => {
          const newGrid = prev.map((row) => [...row]);

          if (currValue > newGrid[nr][nc]) {
            newGrid[r][c] = currValue / newGrid[nr][nc];
            newGrid[nr][nc] = null;
          } else if (currValue < newGrid[nr][nc]) {
            newGrid[nr][nc] = newGrid[nr][nc] / currValue;
            newGrid[r][c] = null;
          } else {
            newGrid[r][c] = null;
            newGrid[nr][nc] = null;
          }

          setCurrValue(value);
          setValue(thirdValue);
          setThirdValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));

          return newGrid;
        });
      }
    }

    setGrid((prev) => {
      const newGrid = prev.map((row) => [...row]);

      if (newGrid[r][c] !== null) return prev;

      setCurrValue(value);
      setValue(thirdValue);
      setThirdValue(Math.floor(Math.random() * (9 + (level - 1) * 20) + 2));

      if (draggedId.startsWith("keep-")) {
        newGrid[r][c] = keepValue;
        setKeepValue(null);
        return newGrid;
      }

      newGrid[r][c] = Number(active.id);

      setIsGameOver(isOver(newGrid));
      

      return newGrid;
    });

  }
  if(isGameOver) {
    
    return(
      <GameOver isOver={isGameOver} score={score} highScore={highScore} onRestart={restart} />
    )
  }

  return (
    <div className="game-page">
      <h1 style={{ textAlign: "center" }}>Just Divide</h1>
      <h2 style={{ textAlign: "center", marginTop: "-10px" }}>
        Devide with the numbers to solve rows and columns!
      </h2>

      <div className="game-container">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="cell-container">
            <div className="game-stats">
              <LevelPanel level={level} />
              <ScorePanel score={score} />
            </div>

            <GameBoard grid={grid} />
          </div>

          <QueueTiles
            value1={currValue}
            value2={value}
            value3={thirdValue}
            keepValue={keepValue}
            trashCount={trashCount}
          />
        </DndContext>
      </div>
    </div>
  );
}