import { useState } from "react";
import moment from "moment";
import { CheckButton } from "./CheckButton";
import { RemoveButton } from "./RemoveButton";
import "./TaskList.css";
import { useTask } from "../contexts/TaskContext";

export const TaskList = () => {
  const { taskData, addTask, completeTask } = useTask();

  const filterComplete = () => {};

  return (
    <div>
      {taskData.length != 0 ? (
        taskData.map((todo, index) => (
          <div className="todo-container">
            <div className="todo" key={index}>
              <CheckButton todo={todo.title} index={index} />

              <RemoveButton todo={todo} index={index} />
            </div>
            <div className="timestamp">
              {todo.complete ? (
                <p>Completed: {moment().calendar()} </p>
              ) : (
                <p>Added: {todo.date}</p>
              )}
            </div>
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
