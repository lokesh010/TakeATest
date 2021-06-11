import React from 'react';
import Header from "../component/Header";

const PageLayout =({children}) =>{
    return(
        <>
        <Header/>
        <main>{children}</main>
        </>
    )
}

export default PageLayout;