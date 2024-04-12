export const AddTaskForm = ({onFormSubmit, newTodo, onNewTodoChange}) => {
    return(
        <form onSubmit={onFormSubmit}>
            <label>Add Task here</label>
            <textarea
            value={newTodo}
            onChange={onNewTodoChange}
            />
            <button type="submit">Add task</button>
        </form>
    )
}