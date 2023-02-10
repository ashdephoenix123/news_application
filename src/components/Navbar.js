import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl bg-body-secondary py-3">
                <div className="container-fluid navbar-font navbar-font-2 mx-4">
                    <Link className="navbar-brand navbar-font-1" to="/">NEWZAPP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center justify-content-end" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">technology</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
