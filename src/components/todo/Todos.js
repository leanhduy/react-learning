import { useContext, useEffect, useState } from 'react'
import { OptionContext } from './context'
import TodoItem from './TodoItem'
import { TODOLIST_API } from '../../const/json-api'
import { getAll } from './services'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])
    const [isDbUpdated, setIsDbUpdated] = useState(false)
    const { option, _ } = useContext(OptionContext)

    const updateDb = () => {
        // Update database
    }

    // Fetch the original todo list (full list)
    useEffect(() => {
        getAll(TODOLIST_API).then((data) => {
            setTodos(data)
        })
    }, [])

    // Update the filtered list based on the option
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

    // Fetch database and update todo everytime there is a change to the database (isDbUpdated)
    useEffect(() => {
        // Only fetch data if isDbUpdated is true
        if (isDbUpdated) {
            getAll(TODOLIST_API).then((data) => {
                setTodos(data)
                setIsDbUpdated(false)
            })
        }
    }, [isDbUpdated])

    return (
        <div className="container mt-3">
            <ul className="list-group">
                {filteredTodos.map((t) => (
                    <TodoItem
                        key={t.id}
                        item={t}
                        setIsDbUpdated={setIsDbUpdated}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Todos
