import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "../features/todoSlice"

function AddTodo() {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
         type="text"
         value={input}
         onChange={(e)=>{
            setInput(e.target.value)
         }}
         className='border-4 rounded-md m-4 p-4'
         />
         <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
