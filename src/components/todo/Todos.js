import { useContext, useEffect, useState } from 'react'
import { OptionContext, TodosContext } from './context'
import TodoItem from './TodoItem'
import { TODOLIST_API } from '../../const/json-api'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])
    const { option, _ } = useContext(OptionContext)

    // Fetch the original todo list (full list)
    useEffect(() => {
        try {
            fetch(TODOLIST_API)
                .then((response) => {
                    if (!response.ok) {
                        throw Error('Could not fetch data')
                    }
                    return response.json()
                })
                .then((data) => {
                    setTodos(data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    // Update the todo list based on the option
    useEffect(() => {
        let newTodos = [...todos]
        switch (option) {
            case 'Completed':
                newTodos = newTodos.filter((t) => t.isDone === true)
                break
            case 'Incompleted':
                newTodos = newTodos.filter((t) => t.isDone === false)
                break
            default:
                break
        }
        setFilteredTodos(newTodos)
    }, [option, todos])

    return (
        <div className="container mt-3">
            <ul className="list-group">
                {filteredTodos.map((t) => (
                    <TodoItem
                        key={t.id}
                        item={t}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                    updateDb()
                }}
            >
                Sync Data
            </button>
        </div>
    )
}

export default Todos
