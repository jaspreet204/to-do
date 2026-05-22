function TaskBox(props){
    const completeTask = () => {
    props.dispatch({ type: "COMPLETE",id: props.task.id });
    }
    const deleteTask = () => {
    props.dispatch({ type: "DELETE", id: props.task.id});
    }
    return(
           <section className={props.task.complete ? "note-card done-card" : "note-card"}>
           <h2>{props.task.task}</h2>
           <p>{props.task.date}</p>
           <input type="button"  value="Done" onClick={completeTask} />
           <input type="button" value="Delete" onClick={deleteTask} />
        </section>
    );
}
export default TaskBox;