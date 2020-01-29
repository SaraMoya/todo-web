import React from 'react'


const Todo = (props) => {
    let completedClass = ''

    if (props.Todo.completed === true) {completedClass = 'completed'} else {completedClass = 'not-completed'}

    return (
    <div className='todoItem'>
        <button onClick={()=>props.removeTodo(props.indx)}>X</button>
        <h4 className={completedClass} >{props.Todo.task}</h4>
        <button onClick={()=> props.completedTodo(props.indx)}>Done</button>
    </div>
    )
}

export default Todo
