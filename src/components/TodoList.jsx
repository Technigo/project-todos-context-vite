import { useTodo } from "../contexts/TodoContext.jsx"
import { useCheckbox } from "../contexts/CheckboxContext.jsx"

//Map and list all todos
export const TodoList = () => {
const { todo } = useTodo()
const { tasks, toggleChecked } = useCheckbox()
    
console.log(tasks)


    return (
        <div> <h4>To dos</h4>
            {todo.map((task, index) => (
            <div className="task" key={index}>
            <form>
             <input 
            type="checkbox"
            key={index}
            onChange={toggleChecked}
            ></input>
            <label>
            {task.todotext}</label>
            </form>
            </div>
            ))
            }
            
        </div>
      
    )

}  
//Få checked to dos att hamna längst ned 
//Få unchecked to do's att hoppa upp ett steg till unchecked
//Lägg till sopkorg/radera och edit 
//Form-funktion till varje input/label för att kunna editera
//HUR sparar vi datan för att inte rendera från början vid varje uppdatering
