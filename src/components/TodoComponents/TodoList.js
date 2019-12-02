// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";


        {/* <TodoList /> */}
        // {this.state.toDoArray.map((single) => {
        //     return <Todo Todo={single} />
        //   })
        // }

const TodoList = props => {
    return props.toDoArray.map((single, index) => (
             <Todo key={index} Todo={single} toggleItem={props.toggleItem} />
          ));
        
    
};

export default TodoList;