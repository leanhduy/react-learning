import { createContext, useState } from 'react'
import DisplayFilter from './DisplayFilter'
import Todos from './Todos'
export const OptionContext = createContext('all')

const TodosApp = () => {
    const [option, setOption] = useState('All')
    return (
        <div className="container mt-3">
            <h1>MINI PROJECT #1 - TODO LIST</h1>
            <OptionContext.Provider value={{ option, setOption }}>
                <DisplayFilter />
            </OptionContext.Provider>
            <Todos />
        </div>
    )
}

export default TodosApp
