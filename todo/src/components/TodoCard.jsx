import React from 'react'

const TodoCard = (props) => {

  const {todoIndex , todos} = props;
  const todo = todos[todoIndex];

  return (
    <div className='card color_blue'>
      <h2 className='color_blue card-name'>Name : {todo.info} </h2>
      <div className='color_blue'> 
        <button>Done </button>
        <button>Delete </button>
      </div>
    </div>
  )
}

export default TodoCard