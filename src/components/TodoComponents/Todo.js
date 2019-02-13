import React from "react";

function Todo(props) {
    return (
        <p>
            <strong>
                {props.Todo.task}
            </strong>
        </p>

       

    );
}

export default Todo;