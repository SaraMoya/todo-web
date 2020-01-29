import React from 'react';
import TodosList from './todosList';
import Bar from './bar.js';
import './App.css';

class App extends React.Component {

  state = {todos: [{task: 'walk with Scala', completed: false}, {task: 'buy dinner', completed: false}, {task: "buy Scala's treats", completed: false}]}

  

  render(){ 
    return (
      <div className="App">
        <Bar todos={this.state.todos} thisState={this}  />
        <TodosList todos={this.state.todos} thisState={this} />
      </div>
    );
  }
}

export default App;
