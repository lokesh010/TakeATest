import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { isAuth } from '../../action/authAction'

function AuthRoutes({children, ...rest}) {
    return (
        <Route {...rest} render={()=> isAuth()
            ? children
        : <Redirect to='/student/signin'/>}>
        </Route>
    )
}

export default AuthRoutes
