import React, { useState } from 'react'

const Bar = (props) => {
    const [task, setTask] = useState('')
    //let task = ''

    const handleChange = event => {
        //task = event.target.value
        setTask(event.target.value)
    }

    const addTodo = () => {
        let { todos } = { ...props.thisState.state };
        props.todos.push({task, completed: false})
        props.thisState.setState({ todos });
        setTask('')
        //I have to empty the input
    }

  return (
    <div>
        <input value={task} onChange={handleChange} />
        <button onClick={addTodo}>+</button>
    </div>
  )
}

export default Bar


