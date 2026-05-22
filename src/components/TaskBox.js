function TaskBox(props){

    return(
        <section className="notes">
           <h2>{props.task.task}</h2>
            <p>{props.task.date}</p>
        </section>

    );
}

export default TaskBox;