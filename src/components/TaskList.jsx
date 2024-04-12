import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import TaskCount from "./TaskCount";
import "../styling/TaskList.css";

const TaskList = () => {
  const { tasks } = useTask();

  return (
    <div className="listContainer">
      <div className="listWrapper">
        <h2 className="listTitle">Tasks</h2>
        <p className="taskCount">
          <TaskCount />
        </p>
      </div>
      <ul className="taskList">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
