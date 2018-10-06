import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddForm'

class App extends Component {
  state = {
    todos : [
      {
        id : 1, content : "Buy Chocolate" 
      },
      {
        id : 2, content : "Watch TV"
      }
    ]
  }

  deleteTodo = (id) => {
    let currentTodos = this.state.todos.filter( todo => {
      return todo.id !== id
    })
    this.setState({ todos : currentTodos })
  }

  addTodo = (todo) => {
    let currentTodos = [...this.state.todos]
    todo.id = Math.round(Math.random()*1000)
    currentTodos.push(todo)
    this.setState({ todos : currentTodos})
  }


  render() {
    return (
      <div className="App conatiner">
        <h2 className='center blue-text'> Todos in React</h2>
        <AddTodo addNewTodo={this.addTodo}></AddTodo>
        <Todos todoItems={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
