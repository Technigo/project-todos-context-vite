export const TodoListForm = ({key, type, checked, onChange, style, todo, onClick}) => {
    return (
        <li key={key}>
            <input 
            type={type}
            checked={checked}
            onChange={onChange}
            />
            <label style={style}>{todo}</label>{' '}
           <span><button onClick={onClick}>🗑️</button></span>
        </li>
    )
}