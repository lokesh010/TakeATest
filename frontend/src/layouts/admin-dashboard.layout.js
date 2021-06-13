import React from 'react'
// dashboard styles
// import "https://www.wrappixel.com/templates/ample-admin-lite/"
import "../assets/dashboard/plugins/images/favicon.png"
import "../assets/dashboard/plugins/bower_components/chartist/dist/chartist.min.css"
import "../assets/dashboard/plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css"
import "../assets/dashboard/css/style.min.css"

import logo from '../assets/homepage/images/logo.png'
import { signout } from '../action/authAction'
import { withRouter, Link } from "react-router-dom";

function DashboardLayout({ title, children, history }) {
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin6">
                        <a className="navbar-brand" href="/">
                            <b className="logo-icon">
                                <img src={logo} alt="homepage" />
                            </b>
                        </a>
                        <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                            href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        <ul className="navbar-nav ms-auto d-flex align-items-center">

                            <li>
                                <button className="btn text-white font-medium" onClick={() => signout(() => history.push("/home"))}>
                                    <i className="fas fa-power-off mr-4" aria-hidden="true"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* sidebar */}
            <aside className="left-sidebar" data-sidebarbg="skin6">
                {/* <!-- Sidebar scroll--> */}
                <div className="scroll-sidebar">
                    {/* <!-- Sidebar navigation--> */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            {/* dashboard */}
                            <li className="sidebar-item pt-2">
                                <Link to='/admin/dashboard'>
                                    <div className="sidebar-link waves-effect waves-dark sidebar-link"
                                        aria-expanded="false">
                                        <i className="far fa-clock" aria-hidden="true"></i>
                                        <span className="hide-menu">Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            {/* profile */}
                            <li className="sidebar-item">
                                <Link to='/myprofile'>
                                    <div className="sidebar-link waves-effect waves-dark sidebar-link"
                                        aria-expanded="false">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span className="hide-menu">Profile</span>
                                    </div>
                                </Link>
                            </li>
                            {/* test */}
                            <li className="sidebar-item">
                                <Link to='/admin/test'>
                                    <div className="sidebar-link waves-effect waves-dark sidebar-link"
                                        aria-expanded="false">
                                        <i className="fa fa-table" aria-hidden="true"></i>
                                        <span className="hide-menu">Tests</span>
                                    </div>
                                </Link>
                            </li>
                            {/* question */}
                            <li className="sidebar-item">
                                <Link to='/admin/question'>
                                    <div className="sidebar-link waves-effect waves-dark sidebar-link"
                                        aria-expanded="false">
                                        <i className="fa fa-table" aria-hidden="true"></i>
                                        <span className="hide-menu">Questions And Answers</span>
                                    </div>
                                </Link>
                            </li>
                            {/* result */}
                            <li className="sidebar-item">
                                <Link to='/admin/test/results'>
                                    <div className="sidebar-link waves-effect waves-dark sidebar-link"
                                        aria-expanded="false">
                                        <i className="fa fa-font" aria-hidden="true"></i>
                                        <span className="hide-menu">Results</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </aside>

            <div className="page-wrapper">
                {/* Bread crumb */}
                <div className="page-breadcrumb bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">{title}</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div className="d-md-flex">
                                <ol className="breadcrumb ms-auto">
                                    <li><a href="#" className="fw-normal">{title}</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* dynamic component */}
                <div className="container-fluid">
                    {children}
                </div>
                {/* footer */}
                <footer className="footer text-center"> TakeATest </footer>
            </div>
        </div>
    )
}

export default withRouter(DashboardLayout)
