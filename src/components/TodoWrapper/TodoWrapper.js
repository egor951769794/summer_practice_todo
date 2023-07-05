import './TodoWrapper.css'

import Todo from '../Todo/Todo'
import TodoController from '../TodoController/TodoController'

export default function TodoWrapper({id, header, description, completed, onRemove}) {
    return (
        <div className='todo-wrapper'>
            <Todo id={id} header={header} description={description} checked={completed}></Todo>
            <TodoController id={id} onRemove={onRemove}/>
        </div>
    )
}
