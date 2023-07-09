import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function PaperElbow() {

  const [records, setRecords] = useState([]);
   
  useEffect(() => {

      async function getData() {
          const query = await fetch('http://127.0.0.1:8000/api/paper-elbow');
          const response = await query.json();
          // console.log('response from API ', response);
          setRecords(response);

        }

        getData();
        
  }, []);

    return (
        <>
        <Head>
              <link href="images/favicon.png" rel="shortcut icon" type="image/png"/>
              <link href="images/apple-touch-icon.png" rel="apple-touch-icon"/>
              <link href="images/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>
              <link href="images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114"/>
              <link href="images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Paper Elbow</title>
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
              <h2 class="title">Paper Elbow</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Paper Elbow</a></span>
                  
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div class="col-md-12">
             
             
              <div id="gallery-holder-618422" class="isotope-layout grid-3 gutter-15 clearfix lightgallery-lightbox">
                <div class="isotope-layout-inner">
                
                  {

                  records.map((val, index) => {

                    return(

                      <div class="isotope-item cat1 cat3">
                      <div class="isotope-item-inner">
                        <div class="product">
                          <div class="product-header">
                            <div class="thumb image-swap">
                              <Link href={'/paper-elbow/' + val.id}><img src={'http://127.0.0.1:8000/' + val.img} class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></Link>
                              <Link href={'/paper-elbow/' + val.id}><img src={'http://127.0.0.1:8000/' + val.thumbnail} class="product-hover-image img-responsive img-fullwidth" alt="product"/></Link>
                            </div>
                            <div class="product-button-holder">
                              <ul class="shop-icons">
                                <li class="item"><a href="#" class="button btn-quickview" title="Product quick view"></a></li>
                                <li class="item"><a href="shop-cart.html" class="button tm-btn-add-to-cart">Add to cart</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-details">
                            <span class="product-categories"><a href="#" rel="tag">Paper Elbow</a></span>
                            <h5 class="product-title"><a href={'/paper-elbow/' + val.id}>{val.name}</a></h5>
                            <span class="price">
                              <ins><span class="amount"><span class="currency-symbol"></span>{val.price}</span> EGP</ins>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    )
               
                
                  })
                  }
              
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
        </>
    )
}