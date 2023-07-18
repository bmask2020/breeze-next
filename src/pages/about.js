import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic"

function About() {

  const [records, setRecords] = useState([]);
   
  useEffect(() => {

      async function getData() {
          const query = await fetch('http://127.0.0.1:8000/api/bra');
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
                <title>Naltex For Medical Clothes - About Us</title>
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
    
    <section class="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center"  style={{backgroundImage:'url("frontend/images/bg/bg1.jpg")'}}>
      <div class="container pt-50 pb-50">
        <div class="section-content">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title">About</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">About</a></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    <section class="">
      <div class="container pb-0 pb-lg-90">
        <div class="section-content">
          <div class="row">
            <div class="mb-md-30 col-sm-12 col-lg-4 col-md-6">
              <div class="open-hours p-30 border-10px">
                <h5 class="mt-0"><i class="far fa-clock text-theme-colored1"></i> Opening Hours</h5>
                <ul class="tm-sc-opening-hours tm-sc-opening-hours-compressed opening-hours border-light">
                  <li class="clearfix">
                    <span>Saturday - Thursday</span>
                    <div class="value">9:00 - 18:00</div>
                  </li>
                 
                  <li class="clearfix">
                    <span>Friday</span>
                    <div class="value">Closed</div>
                  </li>
                </ul>
                <h5><i class="far fa-question-circle text-theme-colored1"></i> Need Help?</h5>
                <p>If you need assistance, do not hesitate to contact us</p>
                <div class="tm-sc-button"> <Link href={'/contact'} target="_self" class="btn btn-theme-colored1 btn-sm"> Contact </Link></div>
              </div>
            </div>
            <div class="mb-md-30 col-sm-12 col-lg-4 col-md-6">
              <h4 class="text-gray mt-0">About</h4>
              <h2>Naltex for Medical Clothes</h2>
              <p><em>Naltex Medical Disposable Clothing Factory is regarded as one of the leading factories in Egypt and the Middle East in the field of disposable paper clothing including disposable medical clothing and workwear.</em></p>
             
              <img src="/frontend/images/signature.png" class="attachment-large" alt="images" />
             
            </div>
            <div class="col-sm-12 col-lg-4 hidden-md-down">
              <img width="340" height="464" src="/frontend/images/about/5.png" class="attachment-large" alt="images"/>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    <section class="bg-white-f5">
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <h2>Our Vision</h2>
              <p>The goal of the Naltex factory is to serve the clients of the different medical sector, by providing high quality and competitive prices for the products, in addition to that the Naltex factory works with a professional team at the highest level of experience technically and administratively to provide the most efficient service for the benefit of our customers while achieving the highest standards of integrity to ensure product quality .</p>
             
              <p>
              We, at Naltex Medical Clothing, always strive for continuous improvement to maintain our position and leadership in the medical sector inside Egypt as well as outside it in the Middle East and Africa. As well as meeting the market requirements in terms of product quality and the balance between that and the appropriate price.
              </p>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
              <img src="/frontend/images/services/sc4.jpg" class="attachment-full mb-10" alt="images"/>
              
            </div>
          </div>
        </div>
      </div>
    </section>
   
    {/* <section class="">
      <div class="container">
        <div class="section-title">
          <div class="row justify-content-md-center">
            <div class="col-md-8">
              <div class="text-center mb-60">
                <div class="tm-sc-section-title section-title section-title-style1 text-center">
                  <div class="title-wrapper">
                    <h2 class="title icon-bottom"> <span class="">Our </span> <span class="text-theme-colored1">Products</span></h2>
                    <div class="title-seperator-line"></div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-content">
          <div class="row">
            <div class="col-sm-12">
              <div class="tm-sc-staff tm-sc-staff-carousel staff-style3-modern owl-dots-light-skin owl-dots-center">
               
                <div id="staff-holder-945632" class="owl-carousel owl-theme tm-owl-carousel-4col" data-nav="true" data-autoplay="true" data-loop="true" data-duration="6000" data-smartspeed="300" data-margin="30" data-stagepadding="0">
                 
                  <div class="tm-carousel-item">
                    <div class="tm-staff">
                      <div class="staff-inner">
                        <div class="box-hover-effect">
                          <div class="staff-header effect-wrapper">
                            <div class="thumb">
                              <img src="/frontend/images/team/t1.jpg" class="img-fullwidth" alt="images"/>
                            </div>
                            <div class="overlay-shade shade-white"></div>
                            <div class="icons-holder icons-holder-middle">
                              <div class="icons-holder-inner">
                                <ul class="styled-icons icon-theme-colored1 icon-circled icon-xl">
                                  <li><a class="styled-icons-item" target="_blank" href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="staff-content">
                            <h5 class="name"><a href="#">Maria Angel</a></h5>
                            <div class="speciality">Dentist</div>
                            <ul class="contact-info"></ul>
                            <div class="staff-working-hours">
                              <ul class="working-hours">
                                <li class="clearfix">
                                  <span>Monday - Friday</span>
                                  <div class="value">8.00 - 17.00</div>
                                </li>
                                <li class="clearfix">
                                  <span>Saturday</span>
                                  <div class="value">9.00 - 16.00</div>
                                </li>
                              </ul>
                            </div>
                            <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled icon-sm">
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-linkedin"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-skype"></i></a></li>
                            </ul>
                            <div class="staff-btn">
                              <div class="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tm-carousel-item">
                    <div class="tm-staff">
                      <div class="staff-inner">
                        <div class="box-hover-effect">
                          <div class="staff-header effect-wrapper">
                            <div class="thumb">
                              <img src="/frontend/images/team/t2.jpg" class="img-fullwidth" alt="images"/>
                            </div>
                            <div class="overlay-shade shade-white"></div>
                            <div class="icons-holder icons-holder-middle">
                              <div class="icons-holder-inner">
                                <ul class="styled-icons icon-theme-colored1 icon-circled icon-xl">
                                  <li><a class="styled-icons-item" target="_blank" href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="staff-content">
                            <h5 class="name"><a href="#">Jason Jack</a></h5>
                            <div class="speciality">Cardiologist</div>
                            <ul class="contact-info"></ul>
                            <div class="staff-working-hours">
                              <ul class="working-hours">
                                <li class="clearfix">
                                  <span>Monday - Friday</span>
                                  <div class="value">8.00 - 17.00</div>
                                </li>
                                <li class="clearfix">
                                  <span>Saturday</span>
                                  <div class="value">9.00 - 16.00</div>
                                </li>
                              </ul>
                            </div>
                            <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled icon-sm">
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-linkedin"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-skype"></i></a></li>
                            </ul>
                            <div class="staff-btn">
                              <div class="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tm-carousel-item">
                    <div class="tm-staff">
                      <div class="staff-inner">
                        <div class="box-hover-effect">
                          <div class="staff-header effect-wrapper">
                            <div class="thumb">
                              <img src="/frontend/images/team/t3.jpg" class="img-fullwidth" alt="images"/>
                            </div>
                            <div class="overlay-shade shade-white"></div>
                            <div class="icons-holder icons-holder-middle">
                              <div class="icons-holder-inner">
                                <ul class="styled-icons icon-theme-colored1 icon-circled icon-xl">
                                  <li><a class="styled-icons-item" target="_blank" href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="staff-content">
                            <h5 class="name"><a href="#">Eliz Thopper</a></h5>
                            <div class="speciality">Cardiologist</div>
                            <ul class="contact-info"></ul>
                            <div class="staff-working-hours">
                              <ul class="working-hours">
                                <li class="clearfix">
                                  <span>Monday - Friday</span>
                                  <div class="value">8.00 - 17.00</div>
                                </li>
                                <li class="clearfix">
                                  <span>Saturday</span>
                                  <div class="value">9.00 - 16.00</div>
                                </li>
                              </ul>
                            </div>
                            <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled icon-sm">
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-linkedin"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-skype"></i></a></li>
                            </ul>
                            <div class="staff-btn">
                              <div class="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tm-carousel-item">
                    <div class="tm-staff">
                      <div class="staff-inner">
                        <div class="box-hover-effect">
                          <div class="staff-header effect-wrapper">
                            <div class="thumb">
                              <img src="/frontend/images/team/t4.jpg" class="img-fullwidth" alt="images"/>
                            </div>
                            <div class="overlay-shade shade-white"></div>
                            <div class="icons-holder icons-holder-middle">
                              <div class="icons-holder-inner">
                                <ul class="styled-icons icon-theme-colored1 icon-circled icon-xl">
                                  <li><a class="styled-icons-item" target="_blank" href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="staff-content">
                            <h5 class="name"><a href="#">Jason Thomas</a></h5>
                            <div class="speciality">Neurologiest</div>
                            <ul class="contact-info">
                            </ul>
                            <div class="staff-working-hours">
                              <ul class="working-hours">
                                <li class="clearfix">
                                  <span>Monday - Friday</span>
                                  <div class="value">8.00 - 17.00</div>
                                </li>
                                <li class="clearfix">
                                  <span>Saturday</span>
                                  <div class="value">9.00 - 16.00</div>
                                </li>
                              </ul>
                            </div>
                            <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled icon-sm">
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-linkedin"></i></a></li>
                              <li><a class="styled-icons-item" target="_blank" href="#"><i class="fab fa-skype"></i></a></li>
                            </ul>
                            <div class="staff-btn">
                              <div class="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    

  </div>
            <Footer />
        </>
    )
}

export default dynamic (() => Promise.resolve(About), {ssr: false})