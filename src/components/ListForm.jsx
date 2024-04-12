const ListForm = () => {
    return(
        <form onSubmit={onFormSubmit}>
            <h1>Todo List 📝</h1>
            <h2>My task</h2>

            <textarea
            value={newTodo}
            onChange={onNewTodoChange}
            />
            <button type="submit">Add task</button>
        </form>
    )
}