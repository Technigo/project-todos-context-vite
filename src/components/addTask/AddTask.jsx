import { useAppData } from "../../contexts/FormContext"
import { useState} from "react"

import {AddTaskForm} from "./AddTaskForm";

import "./addTask.css";

export const AddTask = () => {

    const { addTask, } = useAppData()
    const [newTask, setNewTask] = useState('') //new task needs to be filled

    const handleSubmitTask = e =>{
        e.preventDefault()
        if(newTask.trim() !== '') {
            addTask(newTask)
            setNewTask('')
        } 
    }

    const handleNewListChange = e =>{
        setNewTask(e.target.value)
    }

   return (
    <>
    {/* <div className="date">
     <Time weekday={weekday} date={date} />
    </div> */}
    <div className="add-container">
        <AddTaskForm onFormSubmit={handleSubmitTask} newTodo={newTask} onNewTodoChange={handleNewListChange} />
    </div>
    </>
   )
}

