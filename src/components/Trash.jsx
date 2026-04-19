import { useDroppable } from "@dnd-kit/core";
function Trash({id}){
    const { setNodeRef, isOver } = useDroppable({ id });
    return(
        <div 
        ref ={setNodeRef}
        className="trash"
        style={{
            width: 100,
            height: 100,
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