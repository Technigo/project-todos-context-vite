import { useState } from "react";
import moment from "moment";
import { CheckButton } from "./CheckButton";
import { RemoveButton } from "./RemoveButton";
import "./TaskList.css";
import { useTask } from "../contexts/TaskContext";
import { ListRender } from "./ListRender";

export const TaskList = () => {
  const { taskData, addTask, completeTask } = useTask();

  const incompleteTasks = taskData.filter((task) => task.complete === false);
  const completedTasks = taskData.filter((task) => task.complete === true);
  console.log(completedTasks);

  // const filterComplete = () => {

  // };

  return (
    <div>
      {taskData.length != 0 ? (
        <div>
          <h2>Active Tasks</h2>
          <ListRender array={incompleteTasks} />
          <h2>Completed Tasks</h2>
          <ListRender array={completedTasks} />
        </div>
      ) : (
        <div className="todo-clear">
          <h2>All clear... </h2> <p>No tasks left todo</p>
        </div>
      )}
    </div>
  );
};
