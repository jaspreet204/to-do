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
        default: return tasks;
    }
}
function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  return (
    <>
      <AddTask dispatch={dispatch}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;