import { useDroppable, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Keep({ id, value }) {
  const { setNodeRef: setDropRef, isOver } = useDroppable({ id });

  const {
    setNodeRef: setDragRef,
    listeners,
    attributes,
    transform
  } = useDraggable({
    id: value !== null ? `keep-${value}` : null,
  });

  const containerStyle = {
    width: "clamp(60px, 12vw, 100px)",
    height: "clamp(60px, 12vw, 100px)",
    border: "2px solid black",
    background: isOver ? "lightgreen" : "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "visible",
  };

  const tileStyle = {
    width: "80%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "tomato",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "clamp(14px, 2.5vw, 22px)",
    cursor: "grab",
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    zIndex: transform ? 999 : "auto",
    position: transform ? "relative" : "static",
  };

  return (
    <div ref={setDropRef} style={containerStyle}>
      {value !== null && (
        <div
          ref={setDragRef}
          style={tileStyle}
          {...listeners}
          {...attributes}
        >
          {value}
        </div>
      )}
    </div>
  );
}