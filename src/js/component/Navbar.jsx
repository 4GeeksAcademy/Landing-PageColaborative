// importamos react
import React from "react";

function Navbar() {
    return (
        // dentro de este div ira el codigo del navbar
        <div className="col-8 m-auto p-0">
            <nav className="navbar navbar-expand-lg bg-dark text-white">
                <div className="container p-0 m-0" >
                    <div>
                        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse text-white d-flex flex-row justify-content-end" id="navbarNav">
                        <ul className="navbar-nav justify-self-end">
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar