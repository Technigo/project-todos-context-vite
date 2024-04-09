import { useState } from "react"
import { useTodo } from "../contexts/TodoContext.jsx"


//Text field and handleSubmit function 

export const TodoForm = () => {
     const { todo, addTodo } = useTodo()
     const [newTodo, setNewTodo] = useState({
        todotext: ""
    })
    
    const handleChange = event => {
        setNewTodo({...newTodo,[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodo)
        setNewTodo(({ todotext: "" }))
        console.log(newTodo)
    }
    
    

  return (
    <form onSubmit={handleSubmit}>
      <label>New Task</label>
      <input 
      type="text"
      name="todotext"
      value={newTodo.todotext}
      onChange={handleChange} />
   
    </form>
     
  );
};
