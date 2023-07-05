import { useEffect, useState } from 'react';
import TodoWrapper from '../TodoWrapper/TodoWrapper';
import './TodoList.css'

export default function TodoList() {
    const todos = localStorage.getItem("todos");  

    const [removeUpdate, update] = useState(false);

    const remove = () => {
        update(!removeUpdate);
    }


    const listTodos = (JSON.parse(todos)).map(todo => 
        <TodoWrapper
            key={todo.id}
            id={todo.id} 
            header={todo.header} 
            description={todo.description} 
            completed={todo.completed}
            onRemove={remove}>
        </TodoWrapper>)

    return(
        listTodos
    )
}
