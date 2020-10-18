import React from 'react';
import Twitter  from '@ant-design/icons/TwitterOutlined'
import Linkedin from '@ant-design/icons/LinkedinOutlined'
import Github from '@ant-design/icons/GithubOutlined'

const Footer = () => {
    return (
        <footer className="footer">
                <span>All rights reserved. Developed by Abdullah Faraj</span>
                <div className='social-media-icons'>
                    <Twitter />
                    <Linkedin />
                    <Github />
                </div>
         </footer>
    )
}

export default Footer