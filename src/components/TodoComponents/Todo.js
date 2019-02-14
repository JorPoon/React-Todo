import React from "react";
import './Todo.css'

function Todo(props) {
    console.log(props);
    
    return (
        <div
       
        >
        <p  className={props.Todo.completed ? "completed" : " "}
        onClick={() => props.toggleItem(props.Todo.id)} >
            <strong>
                {props.Todo.task}
            </strong>
        </p>
        </div>
    );
}

export default Todo;