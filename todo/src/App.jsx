import React, { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';

const App = () => {

  // const todo_info = [
  //   { info: "Some text 1" , completed : false},
  //   { info: "Some text 2" , completed : false},
  //   { info: "Some text 3" , completed : false},
  //   { info: "Some text 4" , completed : false},
  //   { info: "Some text 5" , completed : false},
  // ]
  
  const [todo_info,setTodosInfo] = useState([]);

  const [selectTab , setSelectTab ] = useState("All")

  function add_todo(newTodo){
    const copy = [...todo_info , newTodo];
    setTodosInfo(copy);
  }

  function edit_todo(index){
    let copy = [...todo_info];
    let newTodo = todo_info[index];
    newTodo["completed"] = true;
    copy[index] = newTodo;
    setTodosInfo(copy);

  }
  function delete_todo(index){
     let newTodoList = todo_info.filter((val , valIndex ) => {
      return valIndex !== index; 
     })
     setTodosInfo(newTodoList)
  }

  let all_tabs = ["All" , "Open" , "Completed"];


  return (
    <div>
      <Header todos={todo_info} />
      <Tabs todos={todo_info} selectTab={selectTab} setSelectTab={setSelectTab} all_tabs={all_tabs}/>
      <TodoInput addTodo={add_todo} />
      <TodoList todos={todo_info} selectTab={selectTab} setSelectTab={setSelectTab} all_tabs={all_tabs} delete_todo={delete_todo} edit_todo={edit_todo}/>
    </div>
  )
}

export default App
