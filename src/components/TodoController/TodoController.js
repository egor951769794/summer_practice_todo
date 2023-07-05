import './TodoController.css'

import trashcan from './../../svg/delete.svg'

export default function TodoController({id, onRemove}) {
    const removeTodo = () => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        const todosFiltered = todos.filter((todo) => {return todo.id != id;});

        localStorage.setItem("todos", JSON.stringify(todosFiltered));
        onRemove();
        // alert(localStorage.getItem("todos"))
    }

    return (
        <div className='controller-body'>
            <img src={trashcan} onClick={() => removeTodo()} className='controller-delete'></img>
        </div>
    )
}
