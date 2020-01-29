import React, { useEffect } from 'react';
import TodosList from './todosList';
import Bar from './bar.js';
import './App.css';

class App extends React.Component {

  state = {todos: [
             {task: 'walk with Scala', completed: false}, 
             {task: 'buy dinner', completed: false}, 
             {task: "buy Scala's treats", completed: false}
            ],
            task: ''
  }

  handleChange = event => {
    let { task } = {...this.state}
    task = event.target.value
    this.setState({ task })
  }

  addTodo = () => {
    let { todos } = { ...this.state };
    todos.push({task: this.state.task, completed: false})
    this.setState({ todos });

    let { task } = {...this.state}
    task = ''
    this.setState({ task })
  }

  removeTodo = (indx) => {
    let { todos } = { ...this.state };
    todos.splice(indx, 1)
    this.setState({ todos });
}

  completedTodo = (indx) => {
    let { todos } = {...this.state}
    todos[indx].completed =  !todos[indx].completed 
    this.setState({todos})
  }

  render(){ 
    return (
      <div className="App">
        <Bar todos={this.state.todos} addTodo={this.addTodo} handleChange={this.handleChange} task={this.state.task}/>
        <TodosList todos={this.state.todos} removeTodo={this.removeTodo} completedTodo={this.completedTodo}/>
      </div>
    );
  }
}

export default App;
