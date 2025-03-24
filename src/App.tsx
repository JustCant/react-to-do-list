import { useState } from 'react';
import './App.css'
import ItemInput from './components/ItemInput';

function App() {
  const [list, setList] = useState(['banana', 'apple']);

  const listItems = list.map(item => <li className="list-group-item" key={item}>{ item }</li>);

  const handleItemAdded = (item: string) => {
    const newList = [...list, item];
    setList(newList);
  }

  return (
    <div className="app">
      <h1>To-do List</h1>
      <ItemInput onItemAdded={handleItemAdded}/>
      <ul className="list-group">
        { listItems }
      </ul>
    </div>
  )
}

export default App
