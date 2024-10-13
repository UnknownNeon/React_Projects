import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {

  const { selectTab,todos ,delete_todo ,edit_todo} = props;
  const tab = selectTab;

  const filterdList = tab === "All" ?
  todos :
   tab === "Completed" ? 
  todos.filter(val => val.completed) :
  todos.filter(val => !val.completed);

  return (
    <div>
    
        {filterdList.map((todo , todoIndex ) => {
        return (
          <TodoCard key={todoIndex} todo={todo} todoIndex={todoIndex} delete_todo={delete_todo} edit_todo={edit_todo} />
        )})}
    </div>
  )
}

export default TodoList