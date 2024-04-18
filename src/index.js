import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TodosApp from './components/mini1/TodosApp'
import ErrorPage from './components/ErrorPage'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'
import CalcApp from './components/mini2/CalcApp'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/signin', element: <SignIn /> },
            { path: '/register', element: <Register /> },
            { path: '/todos', element: <TodosApp /> },
            { path: '/calculator', element: <CalcApp /> },
        ],
    },
])

root.render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
)
