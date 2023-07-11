import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

function ShoppingCart() {

    return (

        <>
           <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Shopping Cart</title>
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
            <div className="main-content-area">
    
    <section className="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" style={{backgroundImage:'url("frontend/images/bg/bg1.jpg")'}}>
      <div className="container pt-50 pb-50">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="title">Shopping Cart</h2>
              <nav className="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div className="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i className="fa fa-angle-right"></i></span>
                  <span><a href="#">Shopping Cart</a></span>
                
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_item">
                      <td className="product-remove"><a title="Remove this item" className="remove" href="#">×</a></td>
                      <td className="product-thumbnail"><a href="#"><img alt="product" src="images/shop/product.jpg"/></a></td>
                      <td className="product-name"><a href="shop-product-details.html">Winter Black Jacket</a>
                        <ul className="variation">
                          <li className="variation-size">Size: <span>Medium</span></li>
                        </ul></td>
                      <td className="product-price"><span className="amount">$36.00</span></td>
                      <td className="product-quantity"><div className="quantity buttons_added">
                          <input type="button" className="minus" value="-"/>
                          <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"/>
                          <input type="button" className="plus" value=""/>
                        </div></td>
                      <td className="product-subtotal"><span className="amount">$36.00</span></td>
                    </tr>
                    <tr className="cart_item">
                      <td className="product-remove"><a title="Remove this item" className="remove" href="#">×</a></td>
                      <td className="product-thumbnail"><a href="#"><img alt="product" src="images/shop/product.jpg"/></a></td>
                      <td className="product-name"><a href="shop-product-details.html">Swan Crop V-Neck Tee</a>
                        <ul className="variation">
                          <li className="variation-size">Size: <span>Small</span></li>
                        </ul></td>
                      <td className="product-price"><span className="amount">$115.00</span></td>
                      <td className="product-quantity"><div className="quantity buttons_added">
                          <input type="button" className="minus" value="-"/>
                          <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"/>
                          <input type="button" className="plus" value="+"/>
                        </div></td>
                      <td className="product-subtotal"><span className="amount">$115.00</span></td>
                    </tr>
                    <tr className="cart_item">
                      <td className="product-remove"><a title="Remove this item" className="remove" href="#">×</a></td>
                      <td className="product-thumbnail"><a href="#"><img alt="product" src="images/shop/product.jpg"/></a></td>
                      <td className="product-name"><a href="shop-product-details.html">Blue Solid Casual Shirt</a>
                        <ul className="variation">
                          <li className="variation-size">Size: <span>Large</span></li>
                        </ul></td>
                      <td className="product-price"><span className="amount">$68.00</span></td>
                      <td className="product-quantity"><div className="quantity buttons_added">
                          <input type="button" className="minus" value="-"/>
                          <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"/>
                          <input type="button" className="plus" value="+"/>
                        </div></td>
                      <td className="product-subtotal"><span className="amount">$68.00</span></td>
                    </tr>
                    <tr className="cart_item">
                      <td colspan="3">
                        <div className="form-inline coupon-form">
                          <div className="coupon mb-3">
                            <input type="text" name="coupon_code" className="input-text form-control mr-1" id="coupon_code" value="" placeholder="Coupon code"/> <button type="submit" className="button btn btn-theme-colored1" name="apply_coupon" value="Apply Coupon">Apply Coupon</button>
                          </div>
                        </div>
                      </td>
                      <td colspan="2">&nbsp;</td>
                      <td><button type="button" className="-cart-update-btn btn btn-theme-colored2">Update Cart</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

              <div className="col-md-12 mt-30">
                <div className="row">
                  <div className="col-md-5">
                    <h4>Calculate Shipping</h4>
                    <form className="form" action="#">
                      <div className="mb-3">
                        <select className="form-control">
                          <option>Select Country</option>
                          <option>Australia</option>
                          <option>UK</option>
                          <option>USA</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="State/country" value=""/>
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Postcod/zip" value=""/>
                      </div>
                      <div className="mb-3 mb-30">
                        <button type="button" className="cart-update-total-button btn btn-theme-colored1">Update Totals</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-5">
                    <h4>Cart Totals</h4>
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>$180.00</td>
                        </tr>
                        <tr>
                          <td>Shipping and Handling</td>
                          <td>$70.00</td>
                        </tr>
                        <tr>
                          <td>Order Total</td>
                          <td>$250.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <a className="cart-checkout-button btn btn-theme-colored1" href="shop-checkout.html">Proceed to Checkout</a> </div>
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

export default ShoppingCart