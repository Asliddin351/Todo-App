import { TodoContext } from './../../context/todo-context';
import { useContext } from 'react'
// import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

import './todo-item.css'
import EditTodoForm from './../edit-todo-form/edit-todo-form';

function TodoItem(props) {

    const actions = useContext(TodoContext)[1]

    return (
        // <Slide triggerOnce={true} direction={`${props.todo.completed === false ? 'right' : 'left'}`}  duration={600}>
            <li className="todo-item">
                <h4 className="todo-item__title">
                    <Link to={'/todo/' + props.todo.id} className='todo-item__link'>{props.todo.title}</Link>
                </h4>
                <p className="todo-item__description">
                    {props.todo.description}
                </p>
                <div className="todo-item__buttons">
                    <button
                        onClick={() => actions.changeTodoStatus(props.todo.id)}
                        className={`btn ${props.todo.completed === true ? 'btn-success' : 'btn-warning'} todo-item__status`}
                    >
                        {props.todo.completed === true ? 'Выполнено' : 'Выполнить'}
                    </button>

                    <EditTodoForm  todo={props.todo} />

                    <button onClick={() => actions.deleteTodo(props.todo.id)} className="btn btn-danger todo-item__delete">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
        // </Slide>
    )
}


export default TodoItem