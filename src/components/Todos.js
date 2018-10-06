import React from 'react'

const Todos = ({ todoItems, deleteTodo }) => {
  const todoList = todoItems.length > 0 ?  (todoItems.map(item => {
    return (
      <div className='collection-item' key={item.id}>
        <span onClick={() => { deleteTodo(item.id)} }>{item.id} {item.content} </span> 
      </div>
    )
  })) : (<p className='center'> There are no Todos</p>)



  // var renderTodos = (items) =>{
  //   items.map(item => {
  //     return (
  //       <div className='collection-item' key={item.id}>
  //         <span> {item.content} </span> 
  //         <p> wow</p>
  //       </div>
  //     )
  //   })
  // }

  // var showNoTodos = () =>{
  //   return (<p className='center'> There are no Todos</p>)
  // }

  // const todoList = todoItems.length > 0 ? renderTodos(todoItems) : showNoTodos() 

  return(
    <div className="todos collection">
      {todoList}
    </div>
  ) 
}

export default Todos