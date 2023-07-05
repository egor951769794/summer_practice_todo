
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddPanel from './components/AddPanel/AddPanel';
import AddWindow from './components/AddWindow/AddWindow';
import { useState } from 'react';

function App() {
  // localStorage.clear()
  const [addWindow, openAddWindow] = useState(false);

  if (localStorage.getItem("todos") == null) localStorage.setItem("todos", "[]");

  return (
    <div className="App">
      {addWindow ? <AddWindow handleWindow={openAddWindow}></AddWindow> : null}
      <AddPanel openAddWindow={() => {openAddWindow(true)}}></AddPanel>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
