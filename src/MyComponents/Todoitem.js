import React from 'react'
// import {Todos} from "./Todos"
export const Todoitem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

// export default Todos