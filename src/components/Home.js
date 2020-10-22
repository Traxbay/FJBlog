import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
            <section className="carousel-section-wrapper home">
                    <div className="carousel-inner">
                        <div className="carousel-section carousel-item active clip-bg pt-225 pb-200 img-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-10 mx-auto">
                                        <div className="carousel-content text-center">
                                            <div className="section-title">
                                                <h2>I'm a Software Engineer!</h2>
                                                <p className="text-white">I'm an enthusiast Software Engineer with 2 years experience. Looking for a better opportunities in amazing environments to help me build great software.</p>
                                            </div>
                                            <Link to="/blogs" className="theme-btn">Read My Blogs</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

    )
}

export default Home