import React from 'react'
// images
import sliderIcon from '../assets/homepage/images/slider-icon.png'
import leftImage from '../assets/homepage/images/left-image.png'
import icon1 from "../assets/homepage/images/about-icon-01.png"
import icon2 from "../assets/homepage/images/about-icon-02.png"
import icon3 from "../assets/homepage/images/about-icon-03.png"
import rightImage from "../assets/homepage/images/right-image.png"
// components
import PageLayout from '../layouts/page.layout'

export default () => 
    <PageLayout>
        <div className="welcome-area mt-0" id="welcome">
            <div className="header-text">
                <div className="container">
                    <div className="row">
                        <div className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <h1>TakeATest is free <strong>for YOU</strong></h1>
                            <p>
                                This examination is 100% free and will help determine your knowledge on particular subjects.
                            </p>
                            <a href="/student/signin" className="main-button-slider btn btn-primary">Find Out More</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src={sliderIcon} className="rounded img-fluid d-block mx-auto" alt="First Vector Graphic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src={leftImage} className="rounded img-fluid d-block mx-auto" alt="App" />
                    </div>
                    <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                        <div className="left-heading">
                            <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
                        </div>
                        <div className="left-text">
                            <p>This template is <a href="#">last updated on 20 August 2019 </a>for main menu drop-down arrow and sub menu text color.Duis auctor dolor eu scelerisque vestibulum.Vestibulum lacinia, nisl sit amet tristique condimentum.<br /><br />
                                Sed a consequat velit.Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio.Donec non quam euismod, mattis dui a, ultrices nisi.</p>
                            <a href="#about2" className="main-button">Discover More</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hr"></div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section" id="about2">
            <div className="container">
                <div className="row">
                    <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                        <div className="left-heading">
                            <h5>Curabitur aliquam eget tellus id porta</h5>
                        </div>
                        <p>Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit. Aenean in feugiat purus.</p>
                        <ul>
                            <li>
                                <img src={icon1} alt="" />
                                <div className="text">
                                    <h6>Nulla ultricies risus quis risus</h6>
                                    <p>You can use this website template for commercial or non-commercial purposes.</p>
                                </div>
                            </li>
                            <li>
                                <img src={icon2} alt="" />
                                <div className="text">
                                    <h6>Donec consequat commodo purus</h6>
                                    <p>You have no right to re-distribute this template as a downloadable ZIP file on any website.</p>
                                </div>
                            </li>
                            <li>
                                <img src={icon3} alt="" />
                                <div className="text">
                                    <h6>Sed placerat sollicitudin mauris</h6>
                                    <p>If you have any question or comment, please <a rel="nofollow" href="https://templatemo.com/contact">contact</a> us on TemplateMo.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src={rightImage} className="rounded img-fluid d-block mx-auto" alt="App" />
                    </div>
                </div>
            </div>
        </section>

        <footer className="my-4">
            <p className="copyright justify-content-center text-center">Copyright &copy; 2020 TakeATest</p>
        </footer>
    </PageLayout>
