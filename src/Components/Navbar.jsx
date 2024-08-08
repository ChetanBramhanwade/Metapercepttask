import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            {/* <nav
            class="navbar navbar-expand-sm navbar-dark bg-primary"
        >
            <a class="navbar-brand" href="#">Title</a>
            <div class="collapse navbar-collapse contain" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page"
                            >Home <span class="visually-hidden">(current)</span></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" aria-current="page"
                            >About <span class="visually-hidden"></span></a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" aria-current="page"
                            >Blog <span class="visually-hidden"></span></a
                        >
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#" aria-current="page"
                            >Contact <span class="visually-hidden"></span></a
                        >
                    </li>
                </ul>
                <form class="d-flex my-2 my-g-l0">
                    <button class="btn  my-2 my-sm-0" type="submit">
                        Button
                    </button>
                </form>
            </div>
        </nav> */}
            <nav className="navbar">
                <div className="navbar-brand">Title</div>
                <div className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                    <button className="navbar-button">Button</button>
                </div>
            </nav>
        </div>
    )
}
