import { useContext } from "react";
import { useTodo } from "../context/TodoContext"

export const TodoList = () => {
  const { todoList } = useTodo()

  return (
    <ul>
{todoList.map((item, index) => {
  return <li key={index}>{item}</li>
})}
</ul>
  )
};
