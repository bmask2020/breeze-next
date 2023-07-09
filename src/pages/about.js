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
                    <span>Monday - Thursday</span>
                    <div class="value">9:00 - 17:00</div>
                  </li>
                  <li class="clearfix">
                    <span>Friday</span>
                    <div class="value">9.00 - 16.00</div>
                  </li>
                  <li class="clearfix">
                    <span>Saturday</span>
                    <div class="value">9.00 - 16.00</div>
                  </li>
                  <li class="clearfix">
                    <span>Sunday</span>
                    <div class="value">Closed</div>
                  </li>
                </ul>
                <h5><i class="far fa-question-circle text-theme-colored1"></i> Need Help?</h5>
                <p>Just make an appointment to get help from our experts.</p>
                <div class="tm-sc-button"> <a href="#" target="_self" class="btn btn-theme-colored1 btn-sm"> View Hospital Details </a></div>
              </div>
            </div>
            <div class="mb-md-30 col-sm-12 col-lg-4 col-md-6">
              <h4 class="text-gray mt-0">About</h4>
              <h2>Medinov Hospital</h2>
              <p><em>One of the world&#8217;s leading hospitals providing safe &amp; compassionate care at its best for everyone.</em></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam.</p>
              <img src="/frontend/images/signature.png" class="attachment-large" alt="images" />
              <div class="tm-sc-button mt-20"> <a href="#" target="_self" class="btn btn-theme-colored1 btn-sm"> Read more </a></div>
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
              <h2>Our Services</h2>
              <p>Eaque libero unde corrupti deleniti maxime ratione doloremque suscipit perferendis aperiam labore debitis atque odit neque possimus optio quo. Eaque libero unde corrupti deleniti maxime ratione doloremque suscipit perferendis aperiam labore suscipit perferendis aperiam labore debitis atque odit neque Eaque libero unde corrupti deleniti maxime ratione doloremque suscipit perferendis aperiam labore debitis atque odit neque possimus optio quo.</p>
              <div class="row mb-10">
                <div class="col-sm-6">
                  <div class="tm-sc-icon-box icon-box icon-left tm-iconbox-icontype-font-icon text-left iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left mb-30">
                    <div class="icon-box-wrapper">
                      <a class="icon icon-type-font-icon icon-gray mb-20"> <i class="flaticon-medical-ambulance14" ></i> </a>
                      <div class="icon-text">
                        <h5 class="icon-box-title"> Emergency Care</h5>
                        <div class="content">
                          <p>consectetur adipisicing elit.</p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="tm-sc-icon-box icon-box icon-left tm-iconbox-icontype-font-icon text-left iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left mb-30">
                    <div class="icon-box-wrapper">
                      <a class="icon icon-type-font-icon icon-gray mb-20"> <i class="flaticon-medical-illness"></i> </a>
                      <div class="icon-text">
                        <h5 class="icon-box-title">Operation Theater</h5>
                        <div class="content">
                          <p>consectetur adipisicing elit.</p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-10">
                <div class="col-sm-6">
                  <div class="tm-sc-icon-box icon-box icon-left tm-iconbox-icontype-font-icon text-left iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left mb-30">
                    <div class="icon-box-wrapper">
                      <a class="icon icon-type-font-icon icon-gray mb-20"> <i class="flaticon-medical-stethoscope10"></i> </a>
                      <div class="icon-text">
                        <h5 class="icon-box-title">Outdoor Checkup</h5>
                        <div class="content">
                          <p>consectetur adipisicing elit.</p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="tm-sc-icon-box icon-box icon-left tm-iconbox-icontype-font-icon text-left iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left mb-30 " >
                    <div class="icon-box-wrapper">
                      <a class="icon icon-type-font-icon icon-gray mb-20"> <i class="flaticon-medical-balls" ></i> </a>
                      <div class="icon-text">
                        <h5 class="icon-box-title">Cancer Service</h5>
                        <div class="content">
                          <p>consectetur adipisicing elit.</p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="tm-sc-icon-box icon-box icon-left tm-iconbox-icontype-font-icon text-left iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left mb-30 " >
                    <div class="icon-box-wrapper">
                      <a class="icon icon-type-font-icon icon-gray mb-20"> <i class="flaticon-medical-drops1" ></i> </a>
                      <div class="icon-text">
                        <h5 class="icon-box-title">Blood Test</h5>
                        <div class="content">
                          <p>consectetur adipisicing elit.</p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div class="mb-sm-50 col-sm-6">
                  <div class="tm-sc-icon-box icon-box icon-left tm-iconbox-icontype-font-icon text-left iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left mb-30" >
                    <div class="icon-box-wrapper">
                      <a class="icon icon-type-font-icon icon-gray mb-20"> <i class="flaticon-medical-tablets9" ></i> </a>
                      <div class="icon-text">
                        <h5 class="icon-box-title" > Pharmacy</h5>
                        <div class="content">
                          <p>consectetur adipisicing elit.</p>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
              <img src="/frontend/images/services/sc4.jpg" class="attachment-full mb-10" alt="images"/>
              <div class="accordion tm-accordion accordion-classic accordion-theme-colored1" id="accordion500">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading501">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse501" aria-expanded="true" aria-controls="collapse501">
                      <strong>Where do I find my Office product key?</strong>
                    </button>
                  </h2>
                  <div id="collapse501" class="accordion-collapse collapse show" aria-labelledby="heading501" data-bs-parent="#accordion500">
                    <div class="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading502">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse502" aria-expanded="false" aria-controls="collapse502">
                      <strong>I am having trouble, what else should I do?</strong>
                    </button>
                  </h2>
                  <div id="collapse502" class="accordion-collapse collapse" aria-labelledby="heading502" data-bs-parent="#accordion500">
                    <div class="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading503">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse503" aria-expanded="false" aria-controls="collapse503">
                      <strong>I need more information about Theme.</strong>
                    </button>
                  </h2>
                  <div id="collapse503" class="accordion-collapse collapse" aria-labelledby="heading503" data-bs-parent="#accordion500">
                    <div class="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section class="">
      <div class="container">
        <div class="section-title">
          <div class="row justify-content-md-center">
            <div class="col-md-8">
              <div class="text-center mb-60">
                <div class="tm-sc-section-title section-title section-title-style1 text-center">
                  <div class="title-wrapper">
                    <h2 class="title icon-bottom"> <span class="">Our </span> <span class="text-theme-colored1">Doctors</span></h2>
                    <div class="title-seperator-line"></div>
                    <div class="paragraph">
                    <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
                    </div>
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
                              <img src="frontend/images/team/t1.jpg" class="img-fullwidth" alt="images"/>
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
                              <img src="frontend/images/team/t2.jpg" class="img-fullwidth" alt="images"/>
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
    </section>
    

  </div>
            <Footer />
        </>
    )
}

export default dynamic (() => Promise.resolve(About), {ssr: false})