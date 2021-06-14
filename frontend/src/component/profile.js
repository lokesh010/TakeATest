import React from 'react'
// layout
import AdminDashboardLayout from '../layouts/admin-dashboard.layout'
import StudentDashboardLayout from '../layouts/student-dashboard.layout'

import '../index.css'

export default () => {

    const user = JSON.parse(localStorage.getItem("user"));

    function profile() {
        return (
            <div style={{ minHeight: '75vh' }}>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-8 mb-4">
                                <div className="profile-head">
                                    <h3>
                                        {user.fullName}
                                    </h3>
                                    <h5>
                                        {user.role}
                                    </h5>
                                    <ul className="nav nav-tabs my-4" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Full Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.fullName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.address}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Role</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.role}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profile Created</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{(user.createdAt).split("T")[0]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

    function DynamicLayout() {
        if (user.role === "admin") {
            return <AdminDashboardLayout title={"My Profile"}>{profile()}</AdminDashboardLayout>
        } else {
            return <StudentDashboardLayout title={"My Profile"}>{profile()}</StudentDashboardLayout>
        }
    }

    return DynamicLayout()
}
