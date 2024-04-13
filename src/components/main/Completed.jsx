import { useAppData } from "../../contexts/FormContext";

export const CompletedTask = () => {
  const { todos, clearAllTask} = useAppData();
  const completedTaskAmount = todos.filter((todo) => todo.completed).length;

  const handleClearAll = (index) => {
    clearAllTask(index);
    confirm("Are you sure?");
  };


  return (
    <>
     <p className="completeAmount">
      Completed {completedTaskAmount}/{todos.length}
    </p>
    <button onClick={handleClearAll}>Clean all</button>
    </>
   
  );
};
