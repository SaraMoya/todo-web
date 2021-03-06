import React from 'react'
import Todo from './Todo.js';

const TodosList = (props) => {
    return (props.todos.map((ele, i) => <div key={i}><Todo Todo={ele} indx={i} removeTodo={props.removeTodo} completedTodo={props.completedTodo} editTodo={props.editTodo} /></div>))
}

export default TodosList
