import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom'

const Home = () => {
    return (
        <BrowserRouter>
            <section class="carousel-section-wrapper home">
                    <div class="carousel-inner">
                        <div class="carousel-section carousel-item active clip-bg pt-225 pb-200 img-bg">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-8 col-lg-10 mx-auto">
                                        <div class="carousel-content text-center">
                                            <div class="section-title">
                                                <h2 class="text-white">I'm a Software Engineer!</h2>
                                                <p class="text-white">I'm an enthusiast Software Engineer with 2 years experience. Looking for a better opportunities in amazing environments to help me build great software.</p>
                                            </div>
                                            <Link to="/blogs" class="theme-btn">Read My Blogs!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </BrowserRouter>

    )
}

export default Home