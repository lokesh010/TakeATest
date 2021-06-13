import React from 'react'
import {Link} from 'react-router-dom'

export default () =>{

    const user = JSON.parse(localStorage.getItem("user"));
    
    return (
        <div class="error-box">
        <div class="error-body text-center">
            <h1 class="error-title text-danger">404</h1>
            <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
            <p class="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
            {
                !user ?
                <Link to="/" class="btn btn-danger btn-rounded waves-effect waves-light mb-5 text-white">Back to home</Link>
                : user.role === "admin" ?
                <Link to="/admin/dashboard" class="btn btn-danger btn-rounded waves-effect waves-light mb-5 text-white">Back to home</Link>
                : 
                <Link to="/student/dashboard" class="btn btn-danger btn-rounded waves-effect waves-light mb-5 text-white">Back to home</Link>
            }
        </div>
    </div>

)
}