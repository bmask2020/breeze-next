import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

function Checkout() {

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
              <div class="col-md-6">
                <div class="billing-details">
                  <h3 class="mb-30">Billing Details</h3>
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
                      <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Apartment, suite, unit etc. (optional)"/>
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkuot-form-city">City</label>
                      <input id="checkuot-form-city" type="email" class="form-control" placeholder="City"/>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label>State/Province</label>
                      <select class="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="checkuot-form-zip">Zip/Postal Code</label>
                      <input id="checkuot-form-zip" type="email" class="form-control" placeholder="Zip/Postal Code"/>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label>Country</label>
                      <select class="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h3>Additional information</h3>
                <label for="order_comments" class="">Order notes&nbsp;<span class="optional">(optional)</span></label>
                <textarea id="order_comments" class="form-control" placeholder="Notes about your order, e.g. special notes for delivery." rows="3"></textarea>
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
                    <tr>
                      <td class="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src="images/shop/product.jpg"/></a></td>
                      <td class="product-name"><a href="shop-product-details.html">Winter Black Jacket</a> x 2</td>
                      <td><span class="amount">$36.00</span></td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src="images/shop/product.jpg"/></a></td>
                      <td class="product-name"><a href="shop-product-details.html">Swan Crop V-Neck Tee</a> x 3</td>
                      <td><span class="amount">$115.00</span></td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail"><a href="shop-product-details.html"><img alt="product" src="images/shop/product.jpg"/></a></td>
                      <td class="product-name"><a href="shop-product-details.html">Blue Solid Casual Shirt</a> x 1</td>
                      <td><span class="amount">$68.00</span></td>
                    </tr>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>&nbsp;</td>
                      <td>$180.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handling</td>
                      <td>&nbsp;</td>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <td>Order Total</td>
                      <td>&nbsp;</td>
                      <td>$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-12 mt-60">
                <div class="card payment-method">
                  <div class="card-header">
                <h3>Payment Information</h3>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-30">
                      <label>
                        <input type="radio" name="optionsRadios" value="option1" checked />
                        <strong>Direct Bank Transfer</strong>
                      </label>
                      <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </li>
                    <li class="list-group-item p-30">
                      <label>
                        <input type="radio" name="optionsRadios" value="option2" checked />
                        <strong>Cheque Payment</strong>
                      </label>
                      <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </li>
                    <li class="list-group-item p-30">
                      <label>
                        <input type="radio" name="optionsRadios" value="option3" checked />
                        <strong>PayPal Payment</strong>
                      </label>
                      <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </li>
                    <li class="list-group-item p-30">
                      <a href="#" class="btn btn-theme-colored1 btn-checkout">Place Order</a>
                    </li>
                  </ul>
                </div>
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