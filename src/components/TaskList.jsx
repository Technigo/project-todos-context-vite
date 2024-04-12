import { useTask } from "../context/TaskContext";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskCount from "./TaskCount";
import AllRemovedImage from "../assets/Celebrate.png";
import "../styling/TaskList.css";

const TaskList = () => {
  const { tasks } = useTask();
  const [allTasksRemoved, setAllTasksRemoved] = useState(false);

  const handleRemoveTask = (id) => {
    removeTask(id);
    if (task.length === 1) {
      setAllTasksRemoved(true);
    }
  };

  return (
    <div className="listContainer">
      <div className="listWrapper">
        <h2 className="listTitle">Tasks</h2>
        <div className="taskCount">
          <TaskCount />
        </div>
      </div>
      {tasks.length > 0 ? (
        <ul className="taskList">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onRemove={() => handleRemoveTask(task.id)}
            />
          ))}
        </ul>
      ) : (
        <div className="emptyTaskContainer">
          <img
            src={AllRemovedImage}
            alt="Dancing little man"
            className="allRemovedImg"
          />
          <p className="allRemovedText">No tasks remaining</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
