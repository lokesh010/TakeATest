import React from 'react'
// dashboard styles
// import "https://www.wrappixel.com/templates/ample-admin-lite/"
import "../assets/dashboard/plugins/images/favicon.png"
import "../assets/dashboard/plugins/bower_components/chartist/dist/chartist.min.css"
import "../assets/dashboard/plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css"
import "../assets/dashboard/css/style.min.css"

import logo from '../assets/homepage/images/logo.png'
import { signout } from '../action/authAction'
import { withRouter } from "react-router-dom";

function DashboardLayout({ title, children, history }) {
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

            <header class="topbar" data-navbarbg="skin5">
                <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                    <div class="navbar-header" data-logobg="skin6">
                        <a class="navbar-brand" href="dashboard.html">
                            <b class="logo-icon">
                                <img src={logo} alt="homepage" />
                            </b>
                        </a>
                        <a class="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                            href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                    </div>
                    <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        <ul class="navbar-nav ms-auto d-flex align-items-center">

                            <li>
                                <button class="btn text-white font-medium" onClick={() => signout(() => history.push("/home"))}>
                                    <i class="fas fa-power-off mr-4" aria-hidden="true"></i>
                                </button>                             
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* sidebar */}
            <aside class="left-sidebar" data-sidebarbg="skin6">
                {/* <!-- Sidebar scroll--> */}
                <div class="scroll-sidebar">
                    {/* <!-- Sidebar navigation--> */}
                    <nav class="sidebar-nav">
                        <ul id="sidebarnav">
                            {/* <!-- User Profile--> */}
                            <li class="sidebar-item pt-2">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="dashboard"
                                    aria-expanded="false">
                                    <i class="far fa-clock" aria-hidden="true"></i>
                                    <span class="hide-menu">Dashboard</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="myprofile"
                                    aria-expanded="false">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <span class="hide-menu">Profile</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="test"
                                    aria-expanded="false">
                                    <i class="fa fa-table" aria-hidden="true"></i>
                                    <span class="hide-menu">Tests</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="question"
                                    aria-expanded="false">
                                    <i class="fa fa-table" aria-hidden="true"></i>
                                    <span class="hide-menu">Questions And Answers</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="results"
                                    aria-expanded="false">
                                    <i class="fa fa-font" aria-hidden="true"></i>
                                    <span class="hide-menu">Results</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="users"
                                    aria-expanded="false">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                    <span class="hide-menu">Users</span>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link waves-effect waves-dark sidebar-link" href="404"
                                    aria-expanded="false">
                                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    <span class="hide-menu">Error 404</span>
                                </a>
                            </li>
                        </ul>

                    </nav>
                </div>
            </aside>

            <div class="page-wrapper">
                {/* Bread crumb */}
                <div class="page-breadcrumb bg-white">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 class="page-title">{title}</h4>
                        </div>
                        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <div class="d-md-flex">
                                <ol class="breadcrumb ms-auto">
                                    <li><a href="#" class="fw-normal">{title}</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
                {/* footer */}
                <footer class="footer text-center"> TakeATest </footer>
            </div>
        </div>
    )
}

export default withRouter(DashboardLayout)
