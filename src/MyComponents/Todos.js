import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh" 
  }
  return (
    <div className='container my-3'style={mystyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0 ? "NO TODOS TO DISPLAY"
      :props.todos.map((todos)=>{
        return (
        <>
        <Todoitem todo={todos} key={todos.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })}
    
    </div>
  )
}

// export default Todos;
