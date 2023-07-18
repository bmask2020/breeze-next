import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

function ProductsShipping() {

    return (

        <>
       <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Products Shipping</title>
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
              <h2 class="title">Products Shipping</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Products Shipping</a></span>
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
                  <a href="#section-one" class="list-group-item list-group-item-action smooth-scroll-to-target">Product Shipping Policy</a>
                  <a href="#section-two" class="list-group-item list-group-item-action smooth-scroll-to-target">Shipping inside Egypt</a>
                  <a href="#section-three" class="list-group-item list-group-item-action smooth-scroll-to-target">International Shipping</a>
                  <a href="#section-four" class="list-group-item list-group-item-action smooth-scroll-to-target">Do you need help ?</a>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div id="section-one" class="mb-50">
              <h3>Product Shipping Policy</h3>
              <hr/>
              <p class="mb-20">We at Naltex Medical Clothing always strive to inform our customers of the full details of the product and its specifications, and one of the matters of concern to the customer is also how to ship the products, so here you will find most of the answers to the shipping process inside and outside Egypt. Please note that product prices do not include shipping fees within Egypt, and when ordering products, please pay attention to that.</p>
            </div>
            <div id="section-two" class="mb-50">
              <h3>Shipping inside Egypt</h3>
              <hr/>
              <p class="mb-20">As for shipping products from medical clothing inside Egypt, this is done by internal shipping companies according to the customer’s data sent to us when ordering the product or by contacting us. The products are shipped on the same day from the date of completing the purchase process, and the products are usually delivered within a maximum of two days, unlike Holidays, and the prices displayed on the site do not include shipping costs, and you can contact us for additional details through various means of communication such as e-mail, or through the WhatsApp application, or by calling via phone.</p>
            </div>
            <div id="section-three" class="mb-50">
              <h3>International Shipping</h3>
              <hr/>
              <p class="mb-20">We at Naltex Medical Clothing are always happy to meet the needs of our customers all over the world, so please note that shipping medical products inside Egypt differs from abroad in terms of distance, ie. in any country of the customer. The weight of the order may vary according to the shipping cost in terms of weight, so please pay attention to these matters when ordering the product or contacting us so as not to cause any problems to the customer. We at Naltex always strive to meet the requirements of our customers.</p>
            
            </div>
            <div id="section-four" class="mb-50">
              <h3>Do you need help ?</h3>
              <hr/>
              <p class="mb-20"> 
              If you need assistance or inquiries about the shipping process or anything else, you can contact us on the following means. E-mail :
                <a href="mailto:sales@naltexweb.com">sales@naltexweb.com</a>
                <br/>
                Whatsapp: 
                  <a href="https://api.whatsapp.com/send?phone=+2001118434812">+2001118434812</a>
                <br/>
                Phone: <a href=" tel:+2001118434812">+2001118434812</a>
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


export default ProductsShipping