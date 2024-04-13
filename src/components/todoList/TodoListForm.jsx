export const TodoListForm = ({keyword, type, checked, onChange, style, todo, onClick}) => {
    return (
        <li key={keyword}>
            <div className="todo-list">
            <input 
            type={type}
            checked={checked}
            onChange={onChange}
            />
            <p style={style}>{todo}</p>{' '}
            <div className="deletBtn">
             <button onClick={onClick}>🗑️</button>
            </div>
          </div>
        </li>
    )
}