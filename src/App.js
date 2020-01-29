import React from 'react';
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

  removeTodo = () => {
    let { todos } = { ...props.thisState.state };
    props.todos.splice(props.indx, 1)
    props.thisState.setState({ todos });
}

  render(){ 
    return (
      <div className="App">
        <Bar todos={this.state.todos} addTodo={this.addTodo} handleChange={this.handleChange} task={this.state.task}/>
        <TodosList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
