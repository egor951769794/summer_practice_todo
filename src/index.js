import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

localStorage.setItem("todos", JSON.stringify([
  {id: 0, header: "Пример №1", description: "Пример того, как может выглядеть todo-лист с несколькими записями.", completed: true},
  {id: 1, header: "Нажмите на заголовок, чтобы раскрыть описание", description: ":)", completed: false},
  {id: 2, header: "Нажмите на корзину, чтобы удалить запись", description: "", completed: false},
]))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
