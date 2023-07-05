import TodoWrapper from '../TodoWrapper/TodoWrapper';
import './TodoList.css'

export default function TodoList() {


    const todos = localStorage.getItem("todos");    

    const listTodos = (JSON.parse(todos)).map(todo => <TodoWrapper id={todo.id} header={todo.header} description={todo.description} completed={todo.completed}></TodoWrapper>)

    return(
        listTodos
    )
}