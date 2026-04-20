import { useDroppable } from "@dnd-kit/core";
function Trash({id}){
    const { setNodeRef, isOver } = useDroppable({ id });
    return(
        <div 
        ref ={setNodeRef}
        className="trash"
        style={{
            width: "clamp(60px, 12vw, 100px)",
            height: "clamp(60px, 12vw, 100px)",
            border: "2px solid black",
            background: isOver ? "lightcoral" : "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}       
        >
            Trash 
        </div>
    )
}

export default Trash;