function AddTask(props){
    const addTask = (event) => {
        event.preventDefault();
        const task = event.target.task.value;
        if(task !== ""){
        props.dispatch({ type: "ADD", task: task});
        event.target.reset();
        }
    }
    return(
        <section className="write-area">
            <form onSubmit={addTask}>
                <input type="text" name="task" placeholder="Write task here"/>
                <input type="submit" value="Add" />
            </form>
        </section>
    );
}

export default AddTask;