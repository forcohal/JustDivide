import { useDroppable } from "@dnd-kit/core";

function Trash({ id, trashCount }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const isDisabled = trashCount === 0;

  return (
    <div
      ref={setNodeRef}
      className="trash"
      style={{
        width: "clamp(60px, 12vw, 100px)",
        height: "clamp(60px, 12vw, 100px)",
        border: "2px solid #8b0000",
        background: isDisabled
          ? "#888"
          : isOver
            ? "#e74c3c"
            : "#c0392b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "8px",
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? "not-allowed" : "default",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "clamp(16px, 3vw, 28px)" }}>
        🗑️ x{trashCount}
      </h1>
    </div>
  );
}

export default Trash;