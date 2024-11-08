import './App.css';
import TodoList from './TodoList';
import DataContext from './DataContext';
import { useState } from 'react';


function App() {
  const [list, setList] = useState([])

  return (
    <div>
      
    <DataContext.Provider value = {{ list,setList }}>
        <TodoList></TodoList>
    </DataContext.Provider>
    
    </div>
  );
}

export default App;
