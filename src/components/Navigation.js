import React from 'react'
import {  Link } from 'react-router-dom'

const Navigation = () => {
    return (
           <header className="header navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <h2>FJBlog</h2>
                                </Link>
                                <div className="collapse navbar-collapse sub-menu-bar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/create">New Blog</Link>
                                        </li>
                                    </ul>
                                    <div className="header-btn">
                                        <Link to="/blogs" className="theme-btn">Blogs</Link>
                                    </div>
                                </div> 
                            </nav> 
                        </div>
                    </div> 
                </div> 
            </header>
    )
}

export default Navigation