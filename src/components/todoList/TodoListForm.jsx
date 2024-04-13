export const TodoListForm = ({keyword, type, checked, onChange, style, todo, onClick, task, taskName}) => {
    return (
        <li key={keyword}>
            <div className="todo-list">
            <input 
            type={type}
            checked={checked}
            onChange={onChange}
            id={task}
            name="todo"
            />
            <label style={style} for={taskName}>{todo}</label>{' '}
            <div className="deletBtn">
             <button onClick={onClick}>🗑️</button>
            </div>
          </div>
        </li>
    )
} 