import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import Keep from "./Keep";
import Trash from "./Trash";

function DraggableBox({ id }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    width: "clamp(50px, 10vw, 80px)",
    height: "clamp(50px, 10vw, 80px)",
    background: "tomato",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto",
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {id}
    </div>
  );
}

export default function QueueTiles({ value1, value2, keepValue}) {
    
  return (
    <div className="queue-tiles-container">
        <Keep id="keep" value={keepValue} />
        <div className="queue-tiles">
        <DraggableBox id={`${value1}`} />
        <div className="queue-tile - 1">
            {value2}
        </div>
        </div>
        <Trash id="trash" />
    </div>
  );
}