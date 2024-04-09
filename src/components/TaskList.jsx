import { useState } from "react";
import moment from "moment";
import { CheckButton } from "./CheckButton";
import "./TaskList.css";
import { useTask } from "../contexts/TaskContext";

export const TaskList = () => {
  const { taskData, addTask, completeTask } = useTask();
  console.log(taskData);



  return (
    <div>
      {taskData.length != 0 ? (
        taskData.map((todo, index) => (
          <div className="todo" key={index}>
            <CheckButton todo={todo.title} index={index} />
            <p>Added: {todo.date}</p>
          </div>
        ))
      ) : (
        <div className="todo-clear">
          <h2>All clear... </h2> <p>No tasks left todo</p>
        </div>
      )}
    </div>
  );
};
