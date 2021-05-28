import React, {useContext} from 'react'
import { TodoContext } from './../context/todo-context';
import { useParams } from "react-router-dom"

function TodoPage() {
    const [todos] = useContext(TodoContext)
    const params = useParams()

    const findedTodo = todos.find(function (todo, index) {
        if (todo.id == params.id) {
            return todo
        }

        return false
    })


    return (
        <div className="container mt-5">
            <div className="todo-page">
                <h1>{findedTodo.id}</h1>
                <h2>{findedTodo.title}</h2>
                <p>{findedTodo.description}</p>
            </div>

        </div>
    )
}

export default TodoPage
