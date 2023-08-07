// importamos react
import React from "react";

function Navbar() {
    return (
        // dentro de este div ira el codigo del navbar
        <div className="col-8 m-auto">
            <nav class="navbar navbar-expand-lg bg-dark text-white">
                <div class="container-fluid" >
                    <div>
                        <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse text-white d-flex flex-row justify-content-end" id="navbarNav">
                        <ul class="navbar-nav justify-self-end">
                            <li class="nav-item">
                                <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar