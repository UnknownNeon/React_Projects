import React from 'react'

const TodoCard = (props) => {

  const {todo, todoIndex ,delete_todo , edit_todo} = props;

  return (
    <div className='card color_cust'>
      <h2 className='color_cust card-name'>Name : {todo.info} </h2>
      <div className='color_cust btn-card'> 
        {
          todo.completed == false ?
            <button onClick={()=> {edit_todo(todoIndex)}}>Done </button> : ""
        }
        <button onClick={()=> {delete_todo(todoIndex)} }style={{"background-color":"red" , "color" : "white"}}>Delete </button>
      </div>
    </div>
  )
}

export default TodoCard