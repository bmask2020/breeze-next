import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic"
import Swal from 'sweetalert2'
import axios from '@/lib/axios'

function Contact() {

  const [records, setRecords] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
   
  useEffect(() => {

      async function getData() {
          const query = await fetch('http://127.0.0.1:8000/api/bra');
          const response = await query.json();
          // console.log('response from API ', response);
          setRecords(response);

        }

        getData();
        
  }, []);


   const sendEmail = async(e) => {

      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('phone', phone);
      formData.append('message', message);
      const fName = document.getElementById('fName');
      const fEmail = document.getElementById('fEmail');
      const fSubject = document.getElementById('fSubject');
      const fPhone = document.getElementById('fPhone');
      const fMessage = document.getElementById('fMessage');
      axios.post('http://127.0.0.1:8000/api/sendemail', formData).then(response =>
      fName.value = '',
      fEmail.value = '',
      fSubject.value = '',
      fPhone.value = '',
      fMessage.value = '',
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message Sent Successfully',
        showConfirmButton: false,
        timer: 1500
      })).catch(error => console.log(error))
      

   }

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
                <title>Naltex For Medical Clothes - Contact Us</title>
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
              <h2 class="title">Contact</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Contact</a></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    <section  id="contact" class="bg-white-f4">
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div class="col-lg-6">
              <h5 class="mb-0 text-gray">Happy to help!</h5>
              <h2 class="mb-30">If you need someone to talk to, we listen. We won’t judge or tell you what to do.</h2>
              <div class="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-50">
                <div class="icon-box-wrapper">
                  <div class="icon-wrapper">
                    <a class="icon icon-type-font-icon icon-dark icon-circled"> <i class="flaticon-contact-044-call-1"></i> </a>
                  </div>
                  <div class="icon-text">
                    <h5 class="icon-box-title mt-0">Phone</h5>
                    <div class="content"><a href="tel:+201282674565">+201282674565</a></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-50">
                <div class="icon-box-wrapper">
                  <div class="icon-wrapper">
                    <a class="icon icon-type-font-icon icon-dark icon-circled"> <i class="flaticon-contact-043-email-1"></i> </a>
                  </div>
                  <div class="icon-text">
                    <h5 class="icon-box-title mt-0">Email</h5>
                    <div class="content"><a href="mailto:sales@naltexweb.com">sales@naltexweb.com</a></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-50">
                <div class="icon-box-wrapper">
                  <div class="icon-wrapper">
                    <a class="icon icon-type-font-icon icon-dark icon-circled"> <i class="flaticon-contact-025-world"></i> </a>
                  </div>
                  <div class="icon-text">
                    <h5 class="icon-box-title mt-0">Cairo</h5>
                    <div class="content">Cairo-Alexandria Agricultural Road</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <ul class="styled-icons icon-dark icon-sm icon-circled mt-30">
                <li><a href="#" data-tm-bg-color="#3B5998"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#" data-tm-bg-color="#02B0E8"><i class="fab fa-twitter"></i></a></li>
               
                <li><a href="#" data-tm-bg-color="#D9CCB9"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" data-tm-bg-color="#2199cb"><i class="fab fa-telegram"></i></a></li>
                <li><a href="#" data-tm-bg-color="#0066c8"><i class="fab fa-linkedin"></i></a></li>
                
              </ul>
            </div>
            <div class="col-lg-6">
              <h2 class="mt-0 mb-0">Interested in discussing?</h2>
              <p class="font-size-20">Active & Ready to use Contact Form!</p>
            
              <form id="contact_form" onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>Name <small>*</small></label>
                      <input onChange={(e) => {setName(e.target.value)}} id='fName' class="form-control" type="text" placeholder="Enter Name" required/>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>Email <small>*</small></label>
                      <input onChange={(e) => {setEmail(e.target.value)}} id='fEmail' class="form-control required email" type="email" placeholder="Enter Email" required/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>Subject <small>*</small></label>
                      <input onChange={(e) => {setSubject(e.target.value)}} id='fSubject' class="form-control required" type="text" placeholder="Enter Subject" required/>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label>Phone</label>
                      <input onChange={(e) => setPhone(e.target.value)} id='fPhone' class="form-control" type="text" placeholder="Enter Phone" required/>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label>Message</label>
                  <textarea  class="form-control required" id='fMessage' rows="5" placeholder="Enter Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div class="mb-3">
                  <input name="form_botcheck" class="form-control" type="hidden" value="" />
                  <button type="submit" class="btn btn-flat btn-theme-colored1 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px" data-loading-text="Please wait...">Send your message</button>
                  <button type="reset" class="btn btn-flat btn-theme-colored3 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px">Reset</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.3287420615047!2d31.228661175167204!3d30.14201587487465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14586aec1425f817%3A0x88babb0d040c8d2f!2sMasr_al%20Eskanderiya%20Agricultural%20Rd%2C%20Al%20Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1688911014221!5m2!1sen!2seg" data-tm-width="100%" height="600" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
            <Footer />
        </>
    )
}

export default dynamic (() => Promise.resolve(Contact), {ssr: false})