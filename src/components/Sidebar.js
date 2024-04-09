import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div
                className="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        Mini Projects
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <NavLink
                                className="nav-link"
                                to="/todos"
                                data-bs-dismiss="offcanvas"
                            >
                                Mini Project #1: TODO LIST
                            </NavLink>
                        </li>
                        <li className="list-group-item">Mini Project #2</li>
                        <li className="list-group-item">Mini Project #3</li>
                        <li className="list-group-item">Mini Project #4</li>
                        <li className="list-group-item">Mini Project #5</li>
                        <li className="list-group-item">Mini Project #6</li>
                        <li className="list-group-item">Mini Project #7</li>
                        <li className="list-group-item">Mini Project #8</li>
                        <li className="list-group-item">Mini Project #9</li>
                        <li className="list-group-item">Mini Project #10</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
