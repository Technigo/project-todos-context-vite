export const AddTaskForm = ({onFormSubmit, newTodo, onNewTodoChange}) => {
    return(
        <form onSubmit={onFormSubmit} className="add-task-container">
            <input
            type="text"
            value={newTodo}
            onChange={onNewTodoChange}
            name="todo"
            id="todo-input"
            className="add-input"
            placeholder="What do you need to do?"
            />
            <button type="submit" className="addBtn">➕ Add</button>
        </form>
    )
}