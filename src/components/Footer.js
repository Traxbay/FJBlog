import React from 'react';
import Twitter  from '@ant-design/icons/TwitterOutlined'
import Linkedin from '@ant-design/icons/LinkedinOutlined'
import Github from '@ant-design/icons/GithubOutlined'

const Footer = () => {
    return (
        <footer class="footer pt-100">
            <div class="container">
                <div class="copyright-area">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="footer-social-links">
                                <ul class="d-flex">
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin/in/abdullahfaraj"><Linkedin /></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/traxbay"><Github /></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/trxby"><Twitter /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p class="wow fadeInUp" data-wow-delay=".3s">Developed by <a
                                    href="https://linkedin.com/in/abdullahfaraj" target="_blank" rel="noopener noreferrer">Abdullah Faraj</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer