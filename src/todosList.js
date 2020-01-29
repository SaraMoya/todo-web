import React from 'react'
import Todo from './Todo.js';

const TodosList = (props) => {
    return (props.todos.map((ele, i) => <div key={i}><Todo todos={props.todos} Todo={ele} thisState={props.thisState} indx={i} /></div>))
}

export default TodosList
