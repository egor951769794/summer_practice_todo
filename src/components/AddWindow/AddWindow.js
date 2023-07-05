import './AddWindow.css'

import { useRef, useState } from 'react';

export default function AddWindow({handleWindow}) {

    const refInputHeader = useRef(null);
    const refInputDesc = useRef(null);

    const [canSave, setCanSave]= useState(false);


    const save = () => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        let id = 0;
        if (todos.length != 0) {
        id = todos.reduce(function(prev, current) {
            return (prev.id > current.id) ? prev : current
        }).id
        }

        todos.push({id: id+1, header: refInputHeader.current.value, description: refInputDesc.current.value, completed: false});
        localStorage.setItem("todos", JSON.stringify(todos));

        handleWindow(false);
    }

    const handleCanSave = () => {
        if (refInputHeader.current.value.length > 0) setCanSave(true);
        else setCanSave(false);
    }

    return (
        <div className='add_window'>
            <div className='add_window-bg' onClick={() => handleWindow(false)}></div>
            <div className='add_window-body'>
                <div className='add_window-header'>Добавить запись</div>
                <input ref={refInputHeader} onChange={()=>handleCanSave()} placeholder='Заголовок'></input>
                <input ref={refInputDesc} placeholder='Описание'></input>
                {canSave? <div onClick={() => save()}>savw</div> : <div>savw</div>}
            </div>
        </div>
    )
}
