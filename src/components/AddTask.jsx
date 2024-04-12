import { useAppData } from "../contexts/FormContext"
import { useState} from "react"
import moment from "moment";
import {AddTaskForm} from "../components/AddTaskForm"
import { Time } from "./Time";

export const AddTask = () => {

    const { addTask} = useAppData()
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

    const date = moment().format("MMM Do YY")
    const weekday = moment().format('dddd')
    
   return (
    <>
    <div className="date">
     <Time weekday={weekday} date={date} />
    </div>
    <div className="add-wrapper">
        <AddTaskForm onFormSubmit={handleSubmitTask} newTodo={newTask} onNewTodoChange={handleNewListChange} />
    </div>
    </>
   )
}

