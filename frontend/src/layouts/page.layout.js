import React from 'react';
import Header from "../component/Header";
// load styles and links
// homepage template
import "../assets/homepage/css/font-awesome.css"
import "../assets/homepage/css/templatemo-art-factory.css"
import "../assets/homepage/css/owl-carousel.css"

const PageLayout =({children}) =>{
    return(
        <>
        <Header/>
        <main>{children}</main>
        </>
    )
}

export default PageLayout;