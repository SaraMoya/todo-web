import React from 'react'


const Todo = (props) => {
  return (
    <div>
        <h4 onClick={()=> props.completedTodo(props.indx)}>{props.Todo.task}</h4>
        <button onClick={()=>props.removeTodo(props.indx)}>X</button>
    </div>
  )
}

export default Todo
