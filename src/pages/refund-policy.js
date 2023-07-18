import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

function RefundPolicy() {

    return (

        <>
         <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Refund Policy</title>
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
              <h2 class="title">Refund & Return Policy</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Refund & Return Policy</a></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container about_cont">
        <div class="row tm-blog-sidebar-row" style={{'display' : 'flex', 'justifyContent' : 'center'}}>
          <div class="col-md-9">
            <div id="section-one" class="mb-50">
              <h3>Refund & Return Policy</h3>
              <hr/>
              <p class="mb-20">
                If you want to exchange or return the product, you must contact us first.
                The customer has the right to return the product within 3 days from the date of receipt, provided that the product is intact and no change has occurred. The customer bears all shipping costs, and the cost of the product is returned to the customer within 14 working days.
                <br/>
                
                <br/>
                If the product is defective or does not comply with the specifications that were specified at the time of purchase, the customer has the right to exchange or return the product within 14 days, in which case the customer must send proof of shipping costs indicating: the consignment number - freight - and cost. After that, the customer is entitled to a full refund.
                <br/><br/>
                Products inclusive in discounts and offers are not subject to exchange or refund, except for a defect in the product, see: Article 4 of the Return and Exchange Policies.
              </p>
             
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

export default RefundPolicy