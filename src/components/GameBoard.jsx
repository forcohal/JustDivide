import { useDroppable } from "@dnd-kit/core";


function Cell({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="cell"
      style={{
        width: 100,
        height: 100,
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isOver ? "lightgreen" : "white",
      }}
    >
      {children}
    </div>
  );
}

export default function GameBoard({ grid }) {
  return (
    <div
      className="game-board"
      
    >
      {grid.map((row, r) =>
        row.map((cell, c) => {
          const id = `${r}-${c}`;

          return (
            <Cell key={id} id={id}>
              {cell}
            </Cell>
          );
        })
      )}
    </div>
  );
}