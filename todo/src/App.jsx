import React from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {

  const todo_info = [
    { info: "Some text 1" , completed : false},
    { info: "Some text 2" , completed : false},
    { info: "Some text 3" , completed : false},
    { info: "Some text 4" , completed : false},
    { info: "Some text 4" , completed : true},
  ]
  
  let all_tabs = ["All" , "Open" , "Completed"];


  return (
    <div>
      <Header todos={todo_info} />
      <Tabs todos={todo_info} all_tabs={all_tabs}/>
      <TodoList todos={todo_info} />
      <TodoInput todos={todo_info} />
    </div>
  )
}

export default App
