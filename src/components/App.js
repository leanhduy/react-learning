// Usage example in a component
import React from 'react'
import { useFetch } from './hooks/useFetch'

function App() {
    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <ul>
                {data &&
                    data.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default App
