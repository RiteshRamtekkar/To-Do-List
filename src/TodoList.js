import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import {useContext} from 'react';
import DataContext from './DataContext';

export default function TodoList() {
   const {list} = useContext( DataContext );
    return (
        <div className='container my-5' style={{backgroundColor: "#08617d" , padding:"10px solid #08617d"}}>
            <TodoForm  />

            {
                list.map((item) =>
                    <TodoItem item={item} />
                )
            }
        </div>
        
    )
}

