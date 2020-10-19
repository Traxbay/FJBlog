import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter, Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <BrowserRouter>
           <header class="header navbar-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <Link class="navbar-brand" to="/">
                                    <h2>FJBlog</h2>
                                </Link>
                                <div class="collapse navbar-collapse sub-menu-bar">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/create">New Blog</Link>
                                        </li>
                                    </ul>
                                    <div class="header-btn">
                                        <Link to="/blogs" class="theme-btn">Blogs</Link>
                                    </div>
                                </div> 
                            </nav> 
                        </div>
                    </div> 
                </div> 
            </header>
        </BrowserRouter>
    )
}

export default Navigation