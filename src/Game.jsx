import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import GameBoard from "./components/GameBoard";
import QueueTiles from "./components/QueueTiles";
import ScorePanel from "./components/ScorePanel";
import LevelPanel from "./components/LevelPanel";
import Keep from "./components/Keep";

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
  const [keepValue, setKeepValue] = useState(null);
  function levelUp(score){
    if(score % 10 === 0) {
      console.log("Level up!");
      setLevel((prev) => prev + 1);
    }
  }

  const [grid, setGrid] = useState(
    Array(4).fill(null).map(() => Array(4).fill(null))
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    const draggedId = active.id;
    const gridId = over.id
    const [r, c] = over.id.split("-").map(Number);
    const isFromKeep = draggedId.startsWith("keep-");
    const neighbours = neighbourVals(r, c);
    console.log("Dragged ID:", draggedId);

    if (!over) return;
    if(over.id === "trash") {
      if(isFromKeep) {
        setKeepValue(null);
        return;
      }
      console.log("Trashing value!");
      setCurrValue(value);
      setValue(Math.floor(Math.random() * (9 + (level - 1)*20) + 2));
      return;
    }
    if(over.id === "keep" && keepValue === null) {
      console.log("Keeping value!");
      setKeepValue(currValue);
      setCurrValue(value);
      setValue(Math.floor(Math.random() * (9 + (level - 1)*20) + 2)); 
      return;
    }
    if(over.id === "keep" && keepValue !== null) {
      return
    }
    
    
    for(var i = 0; i < neighbours.length; i++) {
      const [nr, nc] = neighbours[i];
      if(isFromKeep) {
        
        if(grid[nr][nc] !== null && (grid[nr][nc] % keepValue === 0 || keepValue % grid[nr][nc] === 0)) {
          console.log("Divisible!");
          setScore((prev) => prev + 1)
          levelUp(score + 1);
          return setGrid((prev) => {
            const newGrid = prev.map((row) => [...row]);
            if(keepValue > newGrid[nr][nc]) {
              newGrid[r][c] = keepValue / newGrid[nr][nc];
              newGrid[nr][nc] = null;
            }
            else if(keepValue < newGrid[nr][nc]) {
              newGrid[nr][nc] = newGrid[nr][nc] / keepValue;
              newGrid[r][c] = null; 
            }
            else{
              newGrid[r][c] = null;
              newGrid[nr][nc] = null;
            }
            setKeepValue(null);
            setCurrValue(value);
            setValue(Math.floor(Math.random() * (9 + (level - 1)*20) + 2)); 
            return newGrid;
          });
        }
      }

      
      if(grid[nr][nc] !== null && (grid[nr][nc] % currValue === 0 || currValue % grid[nr][nc] === 0)) {
        console.log("Divisible!");
        setScore((prev) => prev + 1)
        levelUp(score + 1);
        
        return setGrid((prev) => {
          
          const newGrid = prev.map((row) => [...row]);
          if(currValue > newGrid[nr][nc]) {
            newGrid[r][c] = currValue / newGrid[nr][nc];
            newGrid[nr][nc] = null;
            
          }
          else if(currValue < newGrid[nr][nc]) {
            newGrid[nr][nc] = newGrid[nr][nc] / currValue;
            newGrid[r][c] = null; 
          }
          else{
            newGrid[r][c] = null;
            newGrid[nr][nc] = null;
          }
          setCurrValue(value);
          setValue(Math.floor(Math.random() * (9 + (level - 1)*20) + 2)); 
          return newGrid;
          
        });
      }
      
    }

    setGrid((prev) => {
      const newGrid = prev.map((row) => [...row]);
      if(newGrid[r][c] !== null) return prev;

        setCurrValue(value);
        setValue(Math.floor(Math.random() * (9 + (level - 1)*20) + 2)); 
      if(draggedId.startsWith("keep-")) {
        newGrid[r][c] = keepValue;
        setKeepValue(null);
        return newGrid;
      }
      newGrid[r][c] = Number(active.id);
      return newGrid;
    });
  }

  return (
    <div className="game-page">
      <h1 style={{ textAlign: "center" }}>Just Divide</h1>
      <ScorePanel score={score} />
      <LevelPanel level={level} />
      <div className="game-container">
        <DndContext onDragEnd={handleDragEnd}>
          <GameBoard grid={grid} />
          <QueueTiles value1={currValue} value2={value} keepValue={keepValue}/>
        </DndContext>
      </div>
    </div>
  );
}