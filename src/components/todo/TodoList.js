import { useContext, useEffect, useState } from 'react'
import { OptionContext } from './utils/context'
import TodoItem from './TodoItem'
import { TODOLIST_API } from './api/json-api'
import { getAll, notifySuccess } from './services/services'
import AddTodo from './AddTodo'
import DisplayFilter from './DisplayFilter'
import { ClearAllTodos } from './ClearAllTodos'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])
    const [isDbUpdated, setIsDbUpdated] = useState(false)
    const { option, _ } = useContext(OptionContext)

    // Fetch the original todo list at the first render
    useEffect(() => {
        getAll(TODOLIST_API).then((data) => {
            setTodos(data)
        })
    }, [])

    // Update the filtered list based on the option and todos
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
        <>
            <AddTodo
                nextId={todos.length + 1}
                setIsDbUpdated={setIsDbUpdated}
            />
            <DisplayFilter />
            <ul className="list-group">
                {filteredTodos.map((t) => (
                    <TodoItem
                        key={t.id}
                        item={t}
                        setIsDbUpdated={setIsDbUpdated}
                    />
                ))}
            </ul>

            {/* Uncomment when there is API endpoint for deleting all todos implemented */}
            {/* <div className="d-flex justify-content-end">
                <ClearAllTodos
                    className="clear-complete-instance"
                    vector="/cleartodos.png"
                />
            </div> */}
        </>
    )
}

export default TodoList
