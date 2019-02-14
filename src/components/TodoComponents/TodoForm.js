import React from "react";

const TodoForm = props => {
    return (
        <form onSubmit={props.addToDo}>
            <input
                type= "text"
                value= {props.todo}
                onChange= {props.handleChanges}
                name="task" //equal to state[task]
                completed= "false"
                placeholder= "What do you have to do?"
            />
            <button type="submit">Add ToDo</button>
            <button onClick={props.clearToDo}>Clear</button>
        </form>
    );
};

export default TodoForm;