import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../assets/images/logo.png';


function SiteHeader () {

  // useEffect(() => {
  //   localStorage.clear();
  //   window.FB.getLoginStatus(function(response) {   
  //     console.log(response);
  //     if(response.status == 'connected'){
  //       localStorage.setItem("userdata",JSON.stringify(response.authResponse));
  //       setLoginStatus(true);
  //     }
  //   });
  // },[fbInitialize]);

//   const [isHome,setHome] = useState(false);
//   function toHome(){
//     setHome(true);
//   }

//   if(isHome){
//     return(
//       <Redirect to="/" />
//     )
//   } else {
//     return(
//       <div>
//         <h1>About Page</h1>
//         <a onClick={toHome}>Click Here to Home Page</a>
//       </div>
//     ) 
//   }
  return (
    <header>
        <div class="header-area ">
            <div class="header-top_area d-none d-lg-block">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-md-5 ">
                            <div class="header_left">
                                <p>Welcome to Conbusi consulting service</p>
                            </div>
                        </div>
                        <div class="col-xl-7 col-md-7">
                            <div class="header_right d-flex">
                                    <div class="short_contact_list">
                                            <ul>
                                                <li><a href="#"> <i class="fa fa-envelope"></i> info@docmed.com</a></li>
                                                <li><a href="#"> <i class="fa fa-phone"></i> 1601-609 6780</a></li>
                                            </ul>
                                        </div>
                                        <div class="social_media_links">
                                            <a href="#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" class="main-header-area">
                <div class="container">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo">
                                    <a href="index.html">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a class="active" href="index.html">home</a></li>
                                            <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                        <li><a href="about.html">about</a></li>
                                                        <li><a href="property_details.html">property details</a></li>
                                                        <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="Property.html">Property</a></li>
                                            <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div class="Appointment">
                                    <div class="search_btn">
                                        <a href="#">
                                            <i class="ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="book_btn d-none d-lg-block">
                                        <a  href="#">Add Property</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
  )
}

export default SiteHeader;