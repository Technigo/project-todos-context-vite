import { useState } from "react";
import moment from "moment";
import { CheckButton } from "./CheckButton";
import "./Task.css"
import { useTask } from "../themes/TaskTheme";

export const Task = () => {
    const { taskData, addTask } = useTask();

    const [newTask, setNewTask] = useState({
        title: "",
        complete: false,
        date: ""
    }

    )
    const handleSubmit = event => {
        event.preventDefault();

        if (newTask.title) {
            addTask(newBook)
            setNewTask(({title:"", complete: false, date:""}))
        } else {
            alert("Please fill in all the fields")
        }
    }

  return (
    <div>
      {taskData.map((todo, index) => (
        <div className="todo" key={index}>
              <CheckButton name={todo.title} />
          <p>{todo.dateAdded}</p>
        </div>
      ))}
    </div>
  );
};
