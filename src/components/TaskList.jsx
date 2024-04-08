import { useState } from "react";
import moment from "moment";
import { CheckButton } from "./CheckButton";
import "./TaskList.css";
import { useTask } from "../contexts/TaskContext";

export const TaskList = () => {
  const { taskData, addTask } = useTask();
  console.log(taskData);

  return (
    <div>
      {taskData ? (
        taskData.map((todo, index) => (
          <div className="todo" key={index}>
            <CheckButton name={todo.title} />
            <p>{todo.date}</p>
          </div>
        ))
      ) : (
        <div>
          <h2>All clear... </h2> <p>No tasks left todo</p>
        </div>
      )}
    </div>
  );
};
