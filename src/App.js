/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import { Task } from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
      setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {

      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      name: newTask,
      status: false,
    };
    setToDoList( [...toDoList, task]);
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setToDoList(toDoList.map((task) => {
      if(task.id === id)
      {
        return {...task, status: true};
      }

      else
      {
        return task;
      }
    }))
  }

  return (
    <div className="App">
      <div className="addTask m-5">
        <input onChange = {handleChange} />
        <button className="mx-2 btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {
          toDoList.map((task) => {
            return (            
              <Task name={task.name} id={task.id} status={task.status} deleteTask={deleteTask} completeTask={completeTask} />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
