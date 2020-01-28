import React from 'react'

const Bar = (props) => {

    let task = ''

    const handleChange = event => {
        task = event.target.value
    }

    const addTodo = () => {
        let { todos } = { ...props.thisState.state };
        props.todos.push({task, completed: false})
        props.thisState.setState({ todos });
    }

  return (
    <div>
        <input onChange={handleChange} />
        <button onClick={addTodo}>+</button>
    </div>
  )
}

export default Bar


