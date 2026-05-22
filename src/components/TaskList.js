import TaskBox from "./TaskBox";
function TaskList(props){
    return(
        <section className="task-shelf">
            {props.tasks.map((item, index) => {
                return(
                    <TaskBox key={index} task={item}
                      dispatch={props.dispatch}
                    />
                );
            })}
        </section>
    );
}

export default TaskList;