import { useAppData } from "../contexts/FormContext"
import { useState} from "react"

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

    

   return (
    <>
    <div>
        <h1>{appContent.title}</h1>
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

// export const TodoForm = () => {
//     const {list, appContent, removeTodo, addToList} = useAppData()

//     console.log(list, appContent, removeTodo, addToList)

//     const handleIncreaseQuantity = (taskId) => {
//         addToList(list.find((item)=> item.id === taskId))
//     }
    
//     const handleDecreaseQuantity = (taskId) => {
//         removeTodo(taskId)
//     }

//     return(
//         <>
//         <header>
//                 {appContent.title}
//             </header>

//         <div>
//             <form onSubmit={handleSubmit}>
//                <label>{appContent.heading}</label> 
//                <textarea 
//                type='text'
//                name='text'
//                id='text'
//                cols={30}
//                rows={10}
//                onChange={hanldeInputTaskChange}
//                value={list}
//                placeholder="My task...">
//                </textarea>
//                <div>
//                 <button>
//                     Add my new task
//                 </button>
//                </div>
//             </form>
//         </div>
//         <div>
//             {list.length ? (
//                 list.map((item)=>(
//                     <ul key={item.id}>
//                         <li>{item}</li>
//                     </ul>    
//                 ))
//             ) : }
//         </div>
//         </>     
//     )
// }