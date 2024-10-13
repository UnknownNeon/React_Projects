import React, { useState } from 'react'

const TodoInput = (props) => {

  const [inputText , setInputText] = useState({ info : "" , completed : false});

  const {addTodo} = props;
  return (
    <div className='todo-input'>
      <input type='text' value={inputText.info} placeholder='Enter a note' onChange={ (e) => setInputText({info : e.target.value , completed : false})}></input>
      <button onClick={ ()=> {addTodo(inputText) ;
        setInputText({info : ""})
      }}> Create New </button>
    </div>
  )
}

export default TodoInput
