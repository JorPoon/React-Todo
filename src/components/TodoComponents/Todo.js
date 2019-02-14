import React from "react";

function Todo(props) {
    return (
        <div
        className={props.Todo.completed ? "completed" : " "}
        onClick={() => props.toggleItem(props.Todo.id)}
        >
        <p>
            <strong>
                {props.Todo.task}
            </strong>
        </p>
        </div>
    );
}

export default Todo;