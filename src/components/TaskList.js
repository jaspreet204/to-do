import TaskBox from "./TaskBox";
function TaskList(props){
    return(
        <section className="task-shelf">
            {props.tasks.map((item, index) => {
                return(
                    <TaskBox key={index} task={item}/>
                );
            })}
        </section>
    );
}

export default TaskList;