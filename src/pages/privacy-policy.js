import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

function PrivacyPolicy() {

    return (

        <>
         <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Privacy Policy</title>
                <link href="frontend/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
                <link href="frontend/css/animate.min.css" rel="stylesheet" type="text/css"/>
                <link href="frontend/css/javascript-plugins-bundle.css" rel="stylesheet"/>
                <link href="frontend/js/menuzord/css/menuzord.css" rel="stylesheet"/>
                <link href="frontend/css/style-main.css" rel="stylesheet" type="text/css"/>
                <link id="menuzord-menu-skins" href="frontend/css/menuzord-skins/menuzord-rounded-boxed.css" rel="stylesheet"/>
                <link href="frontend/css/responsive.css" rel="stylesheet" type="text/css"/>
                <link href="frontend/css/colors/theme-skin-color-set1.css" rel="stylesheet" type="text/css"/>
                <script src="frontend/js/jquery.js"></script>
                <script src="frontend/js/popper.min.js"></script>
                <script src="frontend/js/bootstrap.min.js"></script>
                <script src="frontend/js/javascript-plugins-bundle.js"></script>
                <script src="frontend/js/menuzord/js/menuzord.js"></script>
              
                <script src="frontend/js/custom.js"></script>
            </Head>
            <Navbar />
           
  <div class="main-content-area">
    
    <section class="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" style={{backgroundImage:'url("frontend/images/bg/bg1.jpg")'}}>
      <div class="container pt-50 pb-50">
        <div class="section-content">
        <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title">Privacy Policy</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Privacy Policy</a></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container about_cont">
        <div class="row tm-blog-sidebar-row">
          <div class="col-md-3">
            <div class="tm-sidebar-area mb-50">
              <div class="sidebar-area-inner">
                <div class="widget tm-widget-sticky-sidebar-in-parent mb-0"></div>
                <div class="list-group">
                  <a href="#section-one" class="list-group-item list-group-item-action smooth-scroll-to-target">Data and information privacy</a>
                  <a href="#section-two" class="list-group-item list-group-item-action smooth-scroll-to-target">Internet Protocol (IP) address</a>
                  <a href="#section-three" class="list-group-item list-group-item-action smooth-scroll-to-target">Netwerk scans</a>
                  <a href="#section-four" class="list-group-item list-group-item-action smooth-scroll-to-target">Disclosure of information</a>
                  <a href="#section-five" class="list-group-item list-group-item-action smooth-scroll-to-target">when you contact us</a>
                  <a href="#section-six" class="list-group-item list-group-item-action smooth-scroll-to-target">Disclosure of information to any third party</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">

            <div id="section-one" class="mb-50">
              <h3>Data and information privacy</h3>
              <hr/>
              <p class="mb-20">We appreciate your interest and your concerns about the privacy of your data on the Internet. This policy has been prepared to help you understand the nature of the data that we collect from you when you visit the Naltex Medical Clothing website on the Internet and how we deal with this personal data.</p>
            </div>

            <div id="section-two" class="mb-50">
              <h3>Internet Protocol (IP) address</h3>
              <hr/>
              <p class="mb-20">At any time you visit any website, including this site, the host server will record your Internet Protocol (IP) address, the date and time of the visit, the type of Internet browser you are using, and the URL of any of the websites that refer you to this site On the web.</p>
            </div>
            <div id="section-three" class="mb-50">
              <h3>Netwerk scans</h3>
              <hr/>
              <p class="mb-20">The surveys that we do directly on the network enable us to collect specific data, such as the data required of you regarding your view and feeling about our site. Your responses are of the utmost importance, and we appreciate it as it enables us to improve the level of our site, and you have complete freedom and choice in providing data related to your name and data other. We may use third party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites (excluding your name, address, e-mail address or telephone number) in order to provide advertisements about goods and services of interest to you.</p>
            
            </div>

            <div id="section-four" class="mb-50">
              <h3>Disclosure of information</h3>
              <hr/>
              <p class="mb-20">We will maintain at all times the privacy and confidentiality of all personal data that we obtain. This information will not be disclosed unless it is required by any law or when we believe in good faith that such action will be required or desirable to comply with the law, or to defend or protect the property rights of this site or its beneficiaries.</p>
            </div>

            <div id="section-five" class="mb-50">
              <h3>when you contact us</h3>
              <hr/>
              <p class="mb-20">All data provided by you will be treated as confidential. Forms submitted directly on the network require the submission of data that will help us improve our site. The data provided by you will be used to respond to all your inquiries, comments, or requests from this site or any of its affiliated sites.</p>
            </div>


            <div id="section-six" class="mb-50">
              <h3>Disclosure of information to any third party</h3>
              <hr/>
              <p class="mb-20">We do not sell, trade, rent, or disclose any information for the benefit of any third party outside this site, or its affiliated sites. The information will only be disclosed if ordered to do so by any judicial or regulatory authority.</p>
            </div>
    
          </div>
        </div>
      </div>
    </section>

  </div>

  <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
            <Footer />
        </>
    )
}


export default PrivacyPolicy