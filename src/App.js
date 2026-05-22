import { useReducer, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function reducer(tasks, action) {
    switch(action.type) {
        case "ADD":
           return [
               ...tasks,
               { id: Date.now(),task: action.task,
                 date: new Date().toLocaleString(), complete: false
               }
             ];
        case "DELETE":
        return tasks.filter((item) => item.id !== action.id); 
    
        case "COMPLETE":
          return tasks.map((item) => {
          if(item.id === action.id){ return{...item,
          complete: !item.complete };}
          return item;        
          });

        case "UPDATE":
        return tasks.map((item) => { if(item.id === action.id){
            return{ 
               ...item, task: action.task,
               date: new Date().toLocaleString()
              };
           }
        return item;
    });
       default:
       return tasks;
      }
    }
   function App() {
      const [tasks, dispatch] = useReducer(reducer, 
        JSON.parse(localStorage.getItem("task"))||[]
      );
      useEffect(() => {
        localStorage.setItem( "tasks",
          JSON.stringify(tasks)
        );
      }, [tasks]);
      return (
         <section className="main-page">
           <h1>Task Reminder </h1>
            <p className="sub-title">
              Keep track your today
            </p>
           <AddTask dispatch={dispatch}/>
          <TaskList tasks={tasks}  dispatch={dispatch}/>
       </section>
      );
    }
export default App;