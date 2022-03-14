import React from 'react'
import {Todo} from "../my_components/Todo"

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70",
    margin: "40px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0 ? <h5>No todos to  show!</h5> : 
        props.todos.map((todo) =>{
          return (
            <>
            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
            </>
          )
        })
      }
       
    
      </div> 
  )
}
