import React, {useState} from "react";

const AddToDo = ({createToDo, getToDos}) => {
    const [todo, setTodo] = useState({title: '', description: ''})

    const addNewToDo = (e) => {
        e.preventDefault()
        createToDo(todo)
        setTodo({title: '', description: ''})
        // getToDos()
    }

    return (
        <form className="create-todo">
            <h1 className="header">Create Todo</h1>
            <label className="font label">Title of ToDo:</label>
            <input required className={"input font title-input"} autoFocus
                   value={todo.title}
                   onChange={e => setTodo({...todo, title: e.target.value})}
                   type="text"
                   placeholder="Work"
            />
            <label className="font label">Description:</label>
            <input required className={"input font description-input"}
                   value={todo.description}
                   onChange={e => setTodo({...todo, description: e.target.value})}
                   type="text"
                   placeholder="Description"

            />
            <button className="btn btn-secondary " type="submit" onClick={addNewToDo}>Create</button>
        </form>
    )
}

export default AddToDo;