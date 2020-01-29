import React from 'react'
import Todo from './Todo.js';

const TodosList = (props) => {
    return (props.todos.map((ele, i) => <div key={i}><Todo Todo={ele} removeTodo={props.removeTodo}/></div>))
}

export default TodosList
