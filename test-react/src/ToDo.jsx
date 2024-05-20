import React from "react";

const ToDo = (props) => {
    return (
        <div className="list-elem font">
            <div className="elem-block">
                <p><strong className="strong">{props.todoo.title}</strong> - {props.todoo.description}</p>
                <p className="list-elem-descr">Completed: {props.todoo.done ? "Done" : "Not done"}</p>
                <div className="buttons">
                    <button className={!props.todoo.done ? 'show-elem btn btn-success' : 'hide-elem btn-success'} onClick={() => props.editDone(props.todoo, true)}>Confirm
                    </button>
                    <button className={props.todoo.done ? 'show-elem btn btn-warning' : 'hide-elem btn-warning'} onClick={() => props.editDone(props.todoo, false)}>Decline</button>
                    <button className="btn btn-danger ${props.todoo.done ? 'show-elem' : 'hide-elem'}"  onClick={() => props.removeToDo(props.todoo)}>Delete
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ToDo

