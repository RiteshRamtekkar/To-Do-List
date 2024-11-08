import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import DataContext from './DataContext';


export default function TodoForm() {
  const { setList } = useContext(DataContext);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  const submitHandler = () => {
    const item = {
      id: new Date().toISOString(),
      title: title,
      description: description,
      completed: false
    }
    setList((prevList) => [...prevList, item])
    setTitle("")
    setDescription("")
    if(!title){
      alert("Please provide a title")
      return
    }
    
  }

  return (
    <div>
    <h1 className='text-center border-bottom' >Todo-List</h1>
    <div className='d-flex'>
      
      <input className="form-control me-1" style={{ border:"1.5px solid lightgrey" }} placeholder='Title' value={title} onChange={titleHandler} />
      <input className="form-control me-1" style={{ border:"1.5px solid lightgrey" }} placeholder='Description' value={description} onChange={descriptionHandler} />
      <button className='btn btn-outline-light' onClick={submitHandler} > Add </button>
      </div>
      
    </div>
  )
}

