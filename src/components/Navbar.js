import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-sm bg-body-tertiary"
            style={{ backgroundColor: '#e3f2fd' }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Portfolio
                </Link>
                <div
                    className="collapse navbar-collapse d-flex"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-fill">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                role="button"
                                to={`/todos`}
                            >
                                Todo-List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                role="button"
                                to={`/calculator`}
                            >
                                Calculator
                            </Link>
                        </li>
                    </ul>
                    {/* Authentication section */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/signin`}>
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/register`}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
