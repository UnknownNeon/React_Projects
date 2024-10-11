import React from 'react'

const Tabs = (props) => {

   const { todos , all_tabs } = props;

  return (
    <nav className='nav'>
        {
            all_tabs.map((tab , tabIndex ) => {
                const number_of_tabs = 
                tab === "All" ? todos.length :
                tab === "Open" ? todos.filter((val) => !val.completed).length :
                todos.filter((val) => val.completed).length;
                
                return (
                    <button key={tabIndex}>
                        <h4>{tab}<span className='badge'>{number_of_tabs != 0 ? number_of_tabs : " "}</span></h4>
                    </button>
                )
            })
        } 
    </nav>
  )
}

export default Tabs