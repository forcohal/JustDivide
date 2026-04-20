import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import Keep from "./Keep";
import Trash from "./Trash";

function DraggableBox({ id }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const containerStyle = {
    width: "clamp(50px, 10vw, 80px)",
    height: "clamp(50px, 10vw, 80px)",
    background: "rgba(255,255,255,0.3)",
    border: "2px dashed #999",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "visible",
  };

  const tileStyle = {
    width: "90%",
    height: "90%",
    background: "tomato",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "clamp(14px, 2.5vw, 22px)",
    touchAction: "none",
    cursor: "grab",
    transform: CSS.Translate.toString(transform),
    zIndex: transform ? 999 : "auto",
    position: transform ? "relative" : "static",
  };

  return (
    <div style={containerStyle}>
      <div ref={setNodeRef} style={tileStyle} {...listeners} {...attributes}>
        {id}
      </div>
    </div>
  );
}

export default function QueueTiles({ value1, value2, value3, keepValue, trashCount }) {
  return (
    <div className="queue-tiles-container">
      <Keep id="keep" value={keepValue} />
      <div className="queue-tiles">
        <DraggableBox id={`${value1}`} />
        <div className="queue-tile">
          {value2}
        </div>
        <div className="queue-tile">
          {value3}
        </div>
      </div>
      <Trash id="trash" trashCount={trashCount} />
    </div>
  );
}