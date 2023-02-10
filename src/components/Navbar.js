import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl p-4 bg-body-tertiary w-100">
                <div className="container-fluid navbar-font navbar-font-2 ms-5">
                    <Link className="navbar-brand navbar-font-1 ms-5 me-5" to="/">NEWZAPP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 d-flex justify-content-center">
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
