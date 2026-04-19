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
    id: value !== null ? `keep-${value}` : null, // only draggable if value exists
  });

  const style = {
    width: 100,
    height: 100,
    border: "2px solid black",
    background: isOver ? "lightgreen" : "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: CSS.Translate.toString(transform),
    cursor: value ? "grab" : "default"
  };

  return (
    <div ref={setDropRef}>
      <div
        ref={value ? setDragRef : null}
        style={style}
        {...(value ? listeners : {})}
        {...(value ? attributes : {})}
      >
        {value}
      </div>
    </div>
  );
}