import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import Playground from './components/Playground'
import TodosApp from './components/todo/TodosApp'
import ErrorPage from './components/ErrorPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{ path: '/todos', element: <TodosApp /> }],
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
