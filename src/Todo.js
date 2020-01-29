import React from 'react'


const Todo = (props) => {

    // const removeTodo = () => {
    //     let { todos } = { ...props.thisState.state };
    //     props.todos.splice(props.indx, 1)
    //     props.thisState.setState({ todos });
    // }

  return (
    <div>
        <h4>{props.Todo.task}</h4>
        <button onClick={props.removeTodo}>X</button>
    </div>
  )
}

export default Todo
