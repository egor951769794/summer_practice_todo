import './AddWindow.css'
import TodoWrapper from '../TodoWrapper/TodoWrapper';

import { useRef } from 'react';

export default function AddWindow({handleWindow}) {

    const refInputHeader = useRef(null);
    const refInputDesc = useRef(null);

    const save = () => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        const id = todos.reduce(function(prev, current) {
            return (prev.id > current.id) ? prev : current
        }).id

        todos.push({id: id+1, header: refInputHeader.current.value, description: refInputDesc.current.value, completed: true});
        localStorage.setItem("todos", JSON.stringify(todos));

        handleWindow(false);
        alert(localStorage.getItem("todos"))
    }

    return (
        <div className='add_window'>
            <div className='add_window-bg' onClick={() => handleWindow(false)}></div>
            <div className='add_window-body'>
                <div className='add_window-header'>Добавить запись</div>
                <input ref={refInputHeader} placeholder='Заголовок'></input>
                <input ref={refInputDesc} placeholder=''></input>
                <div onClick={() => save()}>savw</div>
            </div>
        </div>
    )
}