import { useState } from 'react'
import './Todo.css'

export default function Todo({header, description, checked}) {

    const [expanded, expand] = useState(false);

    const [completed, complete] = useState(checked);

    const handleExpand = () => {
        expand(!expanded);
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
                onClick={() => {complete(!completed)}}>
            </div>
            </div>
            :
            null}
        </div>
    )
}