import { useContext } from 'react'

//components
import TodoForm from '../components/todo-form/todo-form.js'
import Column from '../components/column/column'
import UserCard from '../components/user-card/user-card'
import UserForm from '../components/user-form/user-form'

//contexts
import { TodoContext } from '../context/todo-context'
import { UserContext } from '../context/user-context'


const HomePage = () => {

  const todos = useContext(TodoContext)[0]
  const name = useContext(UserContext)[0]


  const activeTodos = todos.filter(function (todo) {
    if (todo.completed === false) {
      return todo
    }
    return false
  })

  const doneTodos = todos.filter(function (todo) {
    if (todo.completed === true) {
      return todo
    }
    return false
  })



  return (
  
 

      <div className="container">

        {name.length > 0 ? <main>
          <UserCard  />

          <div className="columns-wrapper">
            <Column
              title={'Все дела'}
              todos={todos}
            />
            <Column
              title={'Активные дела'}
              todos={activeTodos}
            
            />
            <Column
              title={'Выполненные дела'}
              todos={doneTodos}
          
            />
          </div>

          <TodoForm  />
        </main> : <UserForm  />}

      </div>
  )
}

export default HomePage
