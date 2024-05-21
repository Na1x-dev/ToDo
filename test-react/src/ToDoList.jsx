import React from "react";
import ToDo from "./ToDo";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ToDoList = ({todos, removeToDo, editDone}) => {
    if (!todos.length) {
        return <h1 className="font nothing-todo">Ничего не запланированно</h1>
    }
    return (
        <div className="list-todo done">
            <TransitionGroup>
                {todos.filter(todoo => !todoo.done).map(todoo => (
                    <CSSTransition key={todoo.id} timeout={500} classNames="item">
                        <ToDo todoo={todoo} key={todoo.id}
                              removeToDo={removeToDo} editDone={editDone}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <div className="h-line"></div>

            <TransitionGroup>

                        {todos.filter(todoo => todoo.done).map(todoo => (
                                <CSSTransition key={todoo.id} timeout={500} classNames="item">
                            <ToDo todoo={todoo} key={todoo.id}
                                                                              removeToDo={removeToDo}
                                                                              editDone={editDone}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>

    )
}

export default ToDoList