import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Portfolio
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/`}>
                                Playground
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to={`/`}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Mini-projects
                            </Link>
                            <ul className="dropdown-menu">
                                <li className="bg-warning">
                                    <Link
                                        className="dropdown-item"
                                        to={`/todos`}
                                    >
                                        Todo Lists
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
