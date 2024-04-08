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
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import Todos from './components/todo/Todos'

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <App children={<Playground />} />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/todos',
                element: <Todos />,
            },
        ],
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
