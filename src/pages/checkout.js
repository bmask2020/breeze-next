import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Checkout() {


  const [records, setRecords] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
   
  useEffect(() => {

      async function getData() {
          const query = await fetch('http://127.0.0.1:8000/api/get-cart');
          const response = await query.json();
          // console.log('response from API ', response);
          setRecords(response.data2);
          setCartTotal(response.data3);
        
        }

        getData();
        
  }, []);

    return (

        <>
         <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Checkout</title>
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
              <h2 class="title">Checkout</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Checkout</a></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-content">
          <form id="checkout-form" action="#">
            <div class="row mt-30">
              <div class="col-md-12">
                <div class="billing-details">
                  <h3 class="mb-30">Invoice details</h3>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="checkuot-form-fname">First Name</label>
                      <input id="checkuot-form-fname" type="email" class="form-control" placeholder="First Name"/>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkuot-form-lname">Last Name</label>
                      <input id="checkuot-form-lname" type="email" class="form-control" placeholder="Last Name"/>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label for="checkuot-form-cname">Company Name</label>
                        <input id="checkuot-form-cname" type="email" class="form-control" placeholder="Company Name"/>
                      </div>
                      <div class="mb-3">
                        <label for="checkuot-form-email">Email Address</label>
                        <input id="checkuot-form-email" type="email" class="form-control" placeholder="Email Address"/>
                      </div>
                      <div class="mb-3">
                        <label for="checkuot-form-address">Address</label>
                        <input id="checkuot-form-address" type="email" class="form-control" placeholder="Street address"/>
                      </div>
                     
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkuot-form-city">Country</label>
                      <input id="checkuot-form-city" type="text" class="form-control" placeholder="Country"/>
                    </div>

                    <div class="mb-3 col-md-6">
                      <label>City</label>
                      <input id="checkuot-form-city" type="text" class="form-control" placeholder="City"/>
                    </div>

                    <div class="mb-3 col-md-6">
                      <label for="checkuot-form-zip">Phone</label>
                      <input id="checkuot-form-zip" type="text" class="form-control" placeholder="Phone"/>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label>Fax</label>
                      <input id="checkuot-form-zip" type="text" class="form-control" placeholder="Fax"/>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="col-md-12 mt-30">
                <h3>Your order</h3>
                <table class="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>

                  {

                    records.map((val, index) => {

                    return(
                      <>
                      <tr>
                      <td class="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src={'http://127.0.0.1:8000/' + val.img}/></a></td>
                      <td class="product-name"><a href="#">{val.name}</a> x {val.quantity}</td>
                      <td><span class="amount">{val.price * val.quantity} EGP</span></td>
                    </tr>
                      </>
                    )


                    })
                  }
                  
                  

                    <tr>
                      <td>Total Including Tax</td>
                      <td>&nbsp;</td>
                      <td>{cartTotal} EGP</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
              <div class="col-md-12">
               
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-30">
                      <button type="submit" class="btn btn-theme-colored1 btn-checkout">Place Order</button>
                    </li>
                  </ul>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
            <Footer />
        </>
    )
}


export default Checkout