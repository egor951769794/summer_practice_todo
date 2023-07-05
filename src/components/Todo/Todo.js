import { useState } from 'react'
import './Todo.css'

export default function Todo({id, header, description, checked}) {

    const [expanded, expand] = useState(false);

    const [completed, complete] = useState(checked);

    const handleExpand = () => {
        expand(!expanded);
    }
    
    const markCompleted = () => {
        complete(!completed);
        const todos = JSON.parse(localStorage.getItem("todos"))
        todos.filter((todo) => {return todo.id == id;})[0].completed = !completed;
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    return (
        <div className={completed? 'todo-body todo-body-completed' : 'todo-body'}>
            <div onClick={handleExpand} className={expanded ? 'todo-header not-expand' : 'todo-header expand'}>
                {header}
            </div>
            {expanded ?
            <div>
            <div className='todo-desc'>
                {description}
            </div>
            <div 
                className={completed ? 'todo-complete-checkbox todo-checkbox-completed' : 'todo-complete-checkbox'} 
                onClick={() => markCompleted()}>
            </div>
            </div>
            :
            null}
        </div>
    )
}
