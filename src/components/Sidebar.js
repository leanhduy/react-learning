import { Link, Navigate, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const closeSidebarAndNavigate = (url) => {
        navigate(url)
    }

    return (
        <>
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
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
                            <Link
                                className="nav-link"
                                data-bs-dismiss="offcanvas"
                                onClick={() => {
                                    navigate('/todos')
                                }}
                            >
                                Mini Project #1: TODO LIST
                            </Link>
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
