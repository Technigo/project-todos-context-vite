import { useAppData } from "../contexts/FormContext";
// import { useState } from "react";



import { EmptyList } from "./EmptyList";
import { UncompletedBtn } from "./UncompleteBtn";

export const TodoList = () =>{
    const {todos, removeTask, toggleTodo, clearAllTask} = useAppData()
    // const [undoTask, setUndoTask] = useState([])

    const handleRemoveTask = (taskToRemove) => {
        removeTask(taskToRemove)
    }

    const handleToggle =(index, completed)=>{
        toggleTodo(index, !completed)
    }

    const handleClearAll = (index) => {
        clearAllTask(index)
    }
    // const handleDoneBtn = (completed) => {
    //    toggleTodo(index, !completed)
    // }


    // const completedTask = (todos)=> {
    //    return }

//   const unfinishBtn = () => {
//     const uncompletedTask = todos.filter (todo=> !todo.completed)
//     setUndoTask(uncompletedTask)
//   }

   const completedTaskAmount = todos.filter(todo=> todo.completed).length
   
    return (
        <div className="todo-list-container">
            {todos.length >0 ? (
                <>
                <div>
                    {/* {todos.length ===1 ? <p>You have 1 task in your todo list.</p> : <p>You have {todos.length} tasks in your todo list.</p>} */}
                    <p>Completed tasks {completedTaskAmount}/{todos.length}</p>
                </div>
                <ul style={{listStyle: 'none'}}>
                    {todos.map((todo, index)=>(
                        <li key={index}>
                            <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={()=> handleToggle(index, todo.completed)}/>
                            <label style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</label>{' '}
                        <span><button onClick={()=>handleRemoveTask(todo)}>⛔️</button></span>
                        </li>
                    ))}
                </ul>
                <button onClick={handleClearAll}>Clean all</button>
                {/* <button onClick={unfinishBtn}>Uncompleted</button>
                <ul>
                    {undoTask.map((task, index) => (
                        <li key={index}>
                            {task.text}

                        </li>
                    ))}
                </ul> */}
                <UncompletedBtn />
                </>
                
            ): <EmptyList />} 
        </div>
    )
}

//todo-list
//comfirm (alert)?
//spread operator for localstorage