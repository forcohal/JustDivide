import { useDroppable } from "@dnd-kit/core";


function Cell({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="cell"
      style={{
        width: "100%",
        height: "100%",
        border: "5px solid #cffef3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isOver ? "#005c64" : "#048793",
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