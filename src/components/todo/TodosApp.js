import { useState } from 'react'
import DisplayFilter from './DisplayFilter'
import TodoList from './TodoList'
import { OptionContext } from './context'
import '../../styles/Todos.css'

const TodosApp = () => {
    const [option, setOption] = useState('')
    return (
        <div className="container mt-3" style={{ width: '75%' }}>
            <h1>MINI PROJECT #1 - TODO LIST</h1>
            <OptionContext.Provider value={{ option, setOption }}>
                <DisplayFilter />
                <TodoList />
            </OptionContext.Provider>
        </div>
    )
}

export default TodosApp
