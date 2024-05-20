import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({todos, removeToDo, editDone}) => {
    if (!todos.length) {
        return <h1 className="font nothing-todo">Ничего не запланированно</h1>
    }
    return (
        <div className="list-todo done">
            {todos.filter(todoo => !todoo.done).map(todoo => <ToDo todoo={todoo} key={todoo.id} removeToDo={removeToDo} editDone={editDone}/>)}
            <div className="h-line"></div>
            {todos.filter(todoo => todoo.done).map(todoo => <ToDo todoo={todoo} key={todoo.id} removeToDo={removeToDo} editDone={editDone}/>)}
        </div>

    )
}

export default ToDoList