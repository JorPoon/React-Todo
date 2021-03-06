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

  //UNDERSTAND THIS..
  toggleItem = toDoId => {
    //copy array
    const newTodos = [...this.state.toDoArray] 
    //loop through array and find matching IDs
    newTodos.map(Todo => {
      if(Todo.id === toDoId) {
        Todo.completed= !Todo.completed
        return Todo
      } else {
        return Todo
      }
    })
    //Update completed field for specific ID
    //setState
    this.setState({toDoArray: newTodos})
  }

  deleteToDo = e => {
    e.preventDefault();
    console.log("delete!");
    this.setState({
      toDoArray: this.state.toDoArray.filter(item => !item.completed)
    })
  }

  clearToDo = e => {
    e.preventDefault();
    console.log("clear");
    this.setState({
      toDoArray: []
    })
  }

  render() {
    return (
      <div>
        <h2>To Do App</h2>
        {/* {this.state.toDoArray.map((single) => {
            return <Todo Todo={single} />
          })
        } */}
        <TodoList toDoArray={this.state.toDoArray} toggleItem={this.toggleItem}/>
        <TodoForm 
          addToDo={this.addToDo}
          todo= {this.state.task}
          handleChanges={this.handleChanges}
          deleteToDo={this.deleteToDo}
          clearToDo={this.clearToDo}
        />
      </div>
    );
  }
}

export default App;
