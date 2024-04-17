import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import TodosApp from './components/todo/TodosApp'
import ErrorPage from './components/ErrorPage'
import Playground from './components/playground/Playground'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'

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
            { path: '/playground', element: <Playground myName="Andy" /> },
        ],
    },
])

root.render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
)
