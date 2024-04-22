import { useState } from 'react'
import TodoList from './TodoList'
import { OptionContext } from './utils/context'
import '../../styles/mini1.css'
import styled from 'styled-components'

const TodoAppTitle = styled.div.attrs({ id: 'title' })`
    height: 50px;
    margin: 0px 0px 15px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TodoAppIcon = styled.img`
    height: 32px;
`

const TodosApp = () => {
    const [option, setOption] = useState('')
    return (
        <div className="container mt-3" style={{ width: '75%' }}>
            <TodoAppTitle>
                <TodoAppIcon src="./todoLogo.png" />
            </TodoAppTitle>
            <OptionContext.Provider value={{ option, setOption }}>
                <TodoList />
            </OptionContext.Provider>
        </div>
    )
}

export default TodosApp
