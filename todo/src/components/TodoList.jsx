import React from 'react'
import TodoCard from './TodoCard'
import TodoInput from './TodoInput';

const TodoList = (props) => {

  const { todos} = props;
  const tab = "All";

  const filterdList = tab === "All" ?
  todos :
   tab === "Completed" ? 
  todos.filter(val => val.completed) :
  todos.filter(val => !val.completed);

  return (
    <div>
      <TodoInput />
        {filterdList.map((todo , todoIndex ) => {
        return (
          <TodoCard key={todoIndex} todo={todo} />
        )})}
    </div>
  )
}

export default TodoList