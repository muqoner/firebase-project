import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand bg-primary navbar-dark">
                <div className="container">
                    <Link to="/" className='navbar-brand' >Home</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/addtodo" className="nav-link">Add Todo</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar