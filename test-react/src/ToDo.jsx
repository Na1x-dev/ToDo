import React from "react";

const ToDo = (props) => {
    return (
        <div className={"list-elem font"}>
            <div className={"elem-block"}>
                <p><strong className="strong">{props.todoo.title}</strong> - {props.todoo.description}</p>
                <p className="list-elem-descr">Completed: {props.todoo.done ? "Done" : "Not done"}</p>
                <div className="buttons">
                    <button className={!props.todoo.done ? 'btn btn-success' : 'btn btn-warning'}
                            onClick={!props.todoo.done ? () => props.editDone(props.todoo, true) : () => props.editDone(props.todoo, false)}>{!props.todoo.done ? "Confirm" : "Decline"}</button>
                    <button className="btn btn-danger"
                            onClick={() => props.removeToDo(props.todoo)}>Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDo

