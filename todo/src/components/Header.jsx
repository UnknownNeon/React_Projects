import React from 'react'

const Header = (props) => {

  const { todos } = props;

  return (
    <header>
        <h1>You have studied {todos.length} task</h1>
    </header>
  )
}

export default Header
