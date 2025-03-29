import { useState } from 'react';
import './App.css'
import ItemInput from './components/ItemInput/ItemInput';
import ItemList from './components/ItemList/ItemList';

function App() {
  const [list, setList] = useState([] as string[]);

  const handleItemAdded = (item: string) => {
    const newList = [...list, item];

    setList(newList);
  }

  const handleItemDeleted = (index: number) => {
    let newList: string[];

    if ((index + 1) === list.length) {
      newList = list.slice(0, index); 
    } else {
      newList = [
        ...list.slice(0, index),
        ...list.slice(index + 1)
      ]; 
    }

    setList(newList);
  }

  const listItems = list.map((item, index) => {
    return {
      name: item,
      index,
      onBtnClick: handleItemDeleted
    }
  });

  return (
    <div className="app">
      <h1>To-do List</h1>
      <ItemInput onItemAdded={ handleItemAdded }/>
      <ItemList items={ listItems }/>
      { !listItems.length && <div>Nothing to do!</div> }
    </div>
  )
}

export default App
