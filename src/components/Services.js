import React from 'react'
import CloudServerOutlined from '@ant-design/icons/CloudServerOutlined'
import DesktopOutlined from '@ant-design/icons/DesktopOutlined'

const Services = () => {
    return (
        <section class="feature-section pt-100 services">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
                        <div class="section-title text-center mb-55">
                            <h2>What do I do?</h2>
                            <p>I'm a Full-Stack web developer. Doing the following responsiblites</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="feature-box box-style">
                            <div class="feature-icon box-icon-style">
                                <CloudServerOutlined />
                            </div>
                            <div class="box-content-style feature-content">
                                <h4>Backend Development</h4>
                                <p>Web backend development in NodeJS & Laravel</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="feature-box box-style">
                            <div class="feature-icon box-icon-style">
                                <DesktopOutlined />
                            </div>
                            <div class="box-content-style feature-content">
                                <h4>Frontend Development</h4>
                                <p>Design & Develop web frontends using HTML5/CSS3/JS & React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services