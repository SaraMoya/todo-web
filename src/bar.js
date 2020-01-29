import React from 'react'

const Bar = (props) => {
  return (
    <div>
        <input value={props.task} onChange={props.handleChange} />
        <button onClick={props.addTodo}>+</button>
    </div>
  )
}

export default Bar
