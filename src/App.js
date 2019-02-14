import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const list = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); 
    this.state = {
      toDoArray: list,
      task: "",
      id: "",
      completed: false
    }
  }
  
  addToDo = e => {
      e.preventDefault();
      const newTodo = {
        task: this.state.task,
        id: this.state.id,
        completed: false
      }
      this.setState({
        toDoArray: [...this.state.toDoArray, newTodo],
        task: "",
        id: Date.now(),
        completed: false
      });
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* {this.state.toDoArray.map((single) => {
            return <Todo Todo={single} />
          })
        } */}
        <TodoList toDoArray={this.state.toDoArray} />
        <TodoForm 
          addToDo={this.addToDo}
          todo= {this.state.task}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
