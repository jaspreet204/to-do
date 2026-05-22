import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function reducer(tasks, action) {
    switch(action.type) {
        case "ADD":
            return [
                ...tasks,
                {
                    id: Date.now(),
                    task: action.task,
                    date: new Date().toLocaleString(),
                    complete: false
                }
            ];
        case "DELETE":
        return tasks.filter((item) => item.id !== action.id); 
        default: return tasks;
    
        case "COMPLETE":
        return tasks.map((item) => {
        if(item.id === action.id){
            return{...item,complete: !item.complete };
        }
        return item;
    });
}
}
function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  return (
    <>
      <AddTask dispatch={dispatch}/>
      <TaskList tasks={tasks}  dispatch={dispatch}/>
    </>
  );
}

export default App;