import React from 'react'
import { useSelector } from 'react-redux'

export default function Todos() {
    const todos = useSelector(state => state.todos)
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo)=>{
        return <div key={todo.id}>{todo.text}</div>
      })}
    </div>
  )
}
