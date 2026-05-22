function TaskBox(props){

     const deleteTask = () => {
     props.dispatch({ type: "DELETE", id: props.task.id});
    }
    return(
        <section className="notes">
           <h2>{props.task.task}</h2>
           <p>{props.task.date}</p>
           <input type="button" value="Delete" onClick={deleteTask} />
        </section>
    );
}
export default TaskBox;