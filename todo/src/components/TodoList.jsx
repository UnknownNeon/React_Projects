import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {

  const { todos, all_tabs} = props
  return (
    <div>
        {todos.map((todo , todoIndex ) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props}/>
        )})}
    </div>
  )
}

export default TodoList