import "./TaskList.css";
import { useTask } from "../contexts/TaskContext";
import { ListRender } from "./ListRender";

export const TaskList = () => {
  const { taskData, addTask, completeTask } = useTask();

  const incompleteTasks = taskData.filter((task) => task.complete === false);
  const completedTasks = taskData.filter((task) => task.complete === true);
  console.log("IncompletedTasks: ", incompleteTasks);
  console.log("CompletedTasks: ", completedTasks);
console.log("All Tasks: ", taskData);
  // const filterComplete = () => {

  // };

  return (
    <div>
      {incompleteTasks.length != 0 ? (
        <div className="todo-list">
          <h2>Active Tasks</h2>
          <ListRender array={incompleteTasks} />
        </div>
      ) : (
        <div className="todo-clear">
          <h2>All clear! </h2> <p>No tasks left... eggcellent! </p>
        </div>
      )}

      {completedTasks.length != 0 ? (
        <div className="todo-list">
          <h2>Completed Tasks</h2>
          <ListRender array={completedTasks} />
        </div>
      ) : null}
    </div>
  );
};
