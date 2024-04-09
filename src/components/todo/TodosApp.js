import { useState } from 'react'
import DisplayFilter from './DisplayFilter'
import Todos from './Todos'
import { OptionContext } from './context'
import '../../styles/Todos.css'

const TodosApp = () => {
    const [option, setOption] = useState('')
    return (
        <div className="container mt-3">
            <h1>MINI PROJECT #1 - TODO LIST</h1>
            <OptionContext.Provider value={{ option, setOption }}>
                <DisplayFilter />
                <Todos />
            </OptionContext.Provider>
        </div>
    )
}

export default TodosApp
