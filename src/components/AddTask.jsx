import { useAppData } from "../contexts/FormContext"
import { useState} from "react"
import moment from "moment";

export const AddTask = () => {

    const { addTask, appContent} = useAppData()
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
    <div>
        <h1>{appContent.title}</h1>
    </div>
    <div>
        <time>{weekday}</time>
        <time>{date}</time>
    </div>
    <div>
        <form onSubmit={handleSubmitTask}>
            <label>{appContent.heading}</label>
            <textarea type="text" name="task" value={newTask} onChange={handleNewListChange}/>
            <button type="submit">Add task</button>
        </form>
    </div>
    </>
   )
}

