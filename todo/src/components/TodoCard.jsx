import React from 'react'

const TodoCard = (props) => {

  const {todoIndex , todos} = props;
  const todo = todos[todoIndex];

  return (
    <div className='card color_cust'>
      <h2 className='color_cust card-name'>Name : {todo.info} </h2>
      <div className='color_cust btn-card'> 
        <button >Done </button>
        <button style={{"background-color":"red" , "color" : "white"}}>Delete </button>
      </div>
    </div>
  )
}

export default TodoCard