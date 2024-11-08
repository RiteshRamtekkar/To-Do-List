import React from 'react'
import { useContext } from 'react';
import DataContext from './DataContext';
import 'bootstrap-icons/font/bootstrap-icons.json'

export default function TodoItem({ item }) {
  const { setList } = useContext(DataContext)
  const changeItem = (id) => {
    setList(prevList => prevList.map(prevItem => {
      if (prevItem.id === id) {
        return { ...prevItem, completed: true };
      }
      else {
        return prevItem;
      }
    }
    ))
  }
  const deleteItem = (id) => {
    setList(prevList => prevList.filter(prevItem => prevItem.id !== id))
  }
  return (
    <div className='list'>
    <div className= "rounded mt-4 p-2 me-1 d-flex "  style={{ backgroundColor: item.completed ? "#7CFC00" : "#E5E4E2" , border:"2px solid grey"}} >
      
        <p> {item.title} :- </p>
        <p className='ms-1'> {item.description}</p>
        <p className='ms-5'>{item.completed ? "Done" : "Pending"}</p>
      
      <button className=" me-1 ms-auto " style={{ borderRadius:"10px" , border:"2px solid grey"}} onClick={() => changeItem(item.id)}> <i className={ " h6 " + (item.completed ? "bi bi-check-square text-success" : "bi bi-square")}></i> </button >
      <button className=" me-1 " style={{ borderRadius:"10px" , border:"2px solid grey"}} onClick={() => deleteItem(item.id)}> <i className= "bi bi-trash text-danger h6 "></i> </button>
      </div>
      </div>
    
  )
}

