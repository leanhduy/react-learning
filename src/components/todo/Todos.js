import { useEffect, useState } from 'react'
const URL = 'http://localhost:3001/todos'

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        try {
            const response = fetch(URL)
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
    return (
        <div className="container mt-3">
            <ul class="list-group">
                {todos.map((t) => (
                    <li class="list-group-item" key={t.id}>
                        {t.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
