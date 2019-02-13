import React from "react";

const TodoForm = props => {
    return (
        <form onSubmit={props.addToDo}>
            <input
                type= "text"
                value= {props.ToDo}
                onChange= {props.handleChanges}
                placeholder= "What do you have to do?"
            />
            <button type="submit">Add ToDo</button>
            <button type="submit">Clear</button>
        </form>
    );
};

export default TodoForm;