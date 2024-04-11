import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import TaskCount from "./TaskCount";
import "../styling/TaskList.css";

const TaskList = () => {
  const { tasks } = useTask();

  return (
    <div className="listContainer">
      <TaskCount />
      <h2 className="listTitle">Todo List</h2>
      <ul className="taskList">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
