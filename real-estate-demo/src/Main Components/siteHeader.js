import React from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'


function SiteHeader () {
    let navItems = JSON.parse(localStorage.getItem('navData'));
    let navLinks = [], navLinksMobile = [];
    // let navLinks = navItems.navigation.map( (item) => 
    //     {
    //         if(item.nav){
    //             <li key={item.key}>
    //                     <Link to={item.url}>
    //                         {item.name}
    //                     </Link>
    //             </li>
    //         }
    //     }
    // );
    // let navLinksMobile = navItems.navigation.map( (item) => 
    //     <Link to={item.url} className="menu-item" key={item.key}>
    //         {item.name}
    //     </Link>
    // );

    for (let x in navItems.navigation){
        if(navItems.navigation[x].nav){
            let desktopNav = (
                <li key={navItems.navigation[x].key}>
                    <NavLink exact to={navItems.navigation[x].url} activeClassName="active">
                        {navItems.navigation[x].name}
                    </NavLink>
                </li>
            );
            let mobileNav = (
                <NavLink exact to={navItems.navigation[x].url} className="menu-item" key={navItems.navigation[x].key} activeClassName="active">
                    {navItems.navigation[x].name}
                </NavLink>
            );
            navLinks.push(desktopNav);
            navLinksMobile.push(mobileNav);
        }
    }
    
  return (
    <>
    <header>
        <div className="header-area ">
            <div className="header-top_area d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-5 ">
                            <div className="header_left">
                                <p>Welcome to real estate services</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-7">
                            <div className="header_right d-flex">
                                    <div className="short_contact_list">
                                            <ul>
                                                <li><a href="#"> <i className="fa fa-envelope"></i> abcd@efghij.com</a></li>
                                                <li><a href="#"> <i className="fa fa-phone"></i> 1234-123 1234</a></li>
                                            </ul>
                                        </div>
                                        <div className="social_media_links">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            {/* <li><a className="active" href="index.html">home</a></li>
                                            <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                        <li><a href="about.html">about</a></li>
                                                        <li><a href="property_details.html">property details</a></li>
                                                        <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="Property.html">Property</a></li>
                                            <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li> */}
                                            {navLinks}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="search_btn">
                                        <a href="">
                                            <i className="ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="book_btn d-none d-lg-block">
                                        <a  href="#add-property">Add Property</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none">
                                    <Menu right >
                                        {navLinksMobile}
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default SiteHeader;