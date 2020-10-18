import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import MenuOutlined from '@ant-design/icons/MenuOutlined'

const Navigation = () => {
    return (
        <BrowserRouter>
            <nav className='navbar navbar-expand-lg fixed-top'>
                <div className='container'>
                <MenuOutlined className='menu-button' />
                    <Link className='navbar-brand' to='/' >
                        FJBlog
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/blogs'>
                            Blogs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>
                            About me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>
                            Contact me
                        </Link>
                    </li>
                </ul>
            </nav>
        </BrowserRouter>
    )
}

export default Navigation