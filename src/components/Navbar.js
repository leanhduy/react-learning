import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: '#e3f2fd' }}
        >
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
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                role="button"
                                to={`/todos`}
                            >
                                Todo-List
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
