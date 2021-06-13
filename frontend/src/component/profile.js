import React, { useEffect } from 'react'
import AdminDashboardLayout from '../layouts/admin-dashboard.layout'
import StudentDashboardLayout from '../layouts/student-dashboard.layout'

import '../index.css'

export default () => {

    const user = JSON.parse(localStorage.getItem("user"));
   
    function profile(){
        return (
            <div style={{ minHeight: '75vh' }}>
                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-8 mb-4">
                                <div class="profile-head">
                                    <h3>
                                        {user.fullName}
                                    </h3>
                                    <h5>
                                        {user.role}
                                    </h5>
                                    <ul class="nav nav-tabs my-4" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Full Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.fullName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.address}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Role</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.role}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profile Created</label>
                                            </div>
                                            <div class="col-md-6">
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
    
    function checkRoleDashboard(){
        if(user.role === "admin"){
            return <AdminDashboardLayout title={"My Profile"}>{profile()}</AdminDashboardLayout>
        }else {
            return <StudentDashboardLayout title={"My Profile"}>{profile()}</StudentDashboardLayout>
        }
    }

    return checkRoleDashboard()
}
