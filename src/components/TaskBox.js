import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function TaskBox(props){
    const completeTask = () => {
    props.dispatch({ type: "COMPLETE",id: props.task.id });
    }
    const deleteTask = () => {
    props.dispatch({ type: "DELETE", id: props.task.id});
    }
    const updateTask = () => {
    const newTask = prompt("Update task", props.task.task);
    if(newTask && newTask.trim() !== ""){ 
        props.dispatch({
        type: "UPDATE",id: props.task.id, task: newTask
        });
    }
}
    return(
           <section className={props.task.complete ? "note-card done-card" : "note-card"}>
           <h2>{props.task.task}</h2>
           <p>{props.task.date}</p>
            
            <div className="task-icons">
                <FaCheck onClick={completeTask} />
                <FaEdit onClick={updateTask} />
                <FaTrash onClick={deleteTask} />
            </div>
        </section>
    );
}
export default TaskBox;