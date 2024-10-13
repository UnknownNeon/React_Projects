import React from 'react'

const TodoCard = (props) => {

  const {todo } = props;

  return (
    <div className='card color_cust'>
      <h2 className='color_cust card-name'>Name : {todo.info} </h2>
      <div className='color_cust btn-card'> 
        {
          todo.completed == false ?
            <button >Done </button> : ""
        }
        <button style={{"background-color":"red" , "color" : "white"}}>Delete </button>
      </div>
    </div>
  )
}

export default TodoCard