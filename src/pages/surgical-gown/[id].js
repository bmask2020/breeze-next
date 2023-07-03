import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import axios from '@/lib/axios'
import { useRouter } from 'next/router'

export default function SurgicalGown() {

  const [records, setRecords] = useState([]);
  const [code,setCode] = useState('');
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [material,setMaterial] = useState('');
  const [color,setColor] = useState('');
  const [quantity,setQuantity] = useState('');
  const [pageTitle,setPageTitle] = useState('');
  const [pageDescrition,setPageDescrition] = useState('');
  const [pageKeywords,setPageKeywords] = useState('');
  const [shortDescription,setShortDescription] = useState('');
  const [image,setImage] = useState('');
  const [thumbnail,setThumbnail] = useState('');
  const [description,setDescription] = useState('');
  
    useEffect(() => {

        const url = window.location.href;
        const myId = url.substring(36);


          let formData = new FormData()

          formData.append('id', myId);
   
           axios
               .post('http://127.0.0.1:8000/api/surgical-gown/product', formData)
               .then(response => 
                setCode(response.data.code) +
                setName(response.data.name) +
                setPrice(response.data.price) +
                setMaterial(response.data.material) +
                setColor(response.data.color) +
                setQuantity(response.data.quantity) +
                setPageTitle(response.data.page_title) +
                setPageDescrition(response.data.page_description) +
                setPageKeywords(response.data.page_keywords) +
                setShortDescription(response.data.short_description) +
                setImage(response.data.img) +
                setDescription(response.data.description)

                   )
               .catch(error => console.log(error))
   

          
    }, []);

    return (
        <>
        <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - {pageTitle}</title>
               

                <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
                <link href="/css/animate.min.css" rel="stylesheet" type="text/css"/>
                <link href="/css/javascript-plugins-bundle.css" rel="stylesheet"/>
             
                <link href="/js/menuzord/css/menuzord.css" rel="stylesheet"/>
              
                <link href="/css/style-main.css" rel="stylesheet" type="text/css"/>
                <link id="menuzord-menu-skins" href="/css/menuzord-skins/menuzord-rounded-boxed.css" rel="stylesheet"/>

                <link href="/css/responsive.css" rel="stylesheet" type="text/css"/>
              
                <link href="/css/colors/theme-skin-color-set1.css" rel="stylesheet" type="text/css"/>

                <script src="/js/jquery.js"></script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/javascript-plugins-bundle.js"></script>
                <script src="/js/menuzord/js/menuzord.js"></script>

            </Head>
            <Navbar />
            <div class="main-content-area">
   
    <section class="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" style={{backgroundImage:'url("/images/bg/bg1.jpg")'}}>
      <div class="container pt-50 pb-50">
        <div class="section-content">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="title">{name}</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">{name}</a></span>
                  
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
          <div class="product-single">
            <div class="row">
              <div class="col-md-6">
                <div class="product-image-slider lightgallery-lightbox">
                  <div class="tm-owl-thumb-carousel" data-nav="true" data-slider-id="1">
                    <div data-thumb={'http://127.0.0.1:8000/' + image}>
                      <a class="lightgallery-trigger" data-exthumbimage={'http://127.0.0.1:8000/' + image} data-src={'http://127.0.0.1:8000/' + image} title="Product 1" href="images/shop/product.jpg"><img class="img-fullwidth" src={'http://127.0.0.1:8000/' + image} alt="images"/></a>
                    </div>
                  
                  </div>
                 
                </div>
              </div>
              <div class="col-md-6">
                <div class="product-summary">
                  <h2 class="product-title mt-0">{name}</h2>
                  <div class="product-rating">
                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{width:'100%'}}>Rated <strong class="rating">5.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div>
                    <a href="#reviews" class="review-link" rel="nofollow">(<span class="count">100</span> customer review)</a>
                  </div>
                  <p class="price"><span class="amount"><span class="currency-symbol"></span>{price}</span> EGP</p>
                  <div class="short-description">
                    <p>{shortDescription}</p>
                   

                    <p><strong>Material &amp; Care</strong><br/>
                    100% Genuine<br/>
                    SSMMS</p>
                  </div>
                  <div class="product_meta">
                    <span class="sku_wrapper">SKU: <span class="sku" data-o_content="woo-hoodie">{code}</span></span>
                    <span class="posted_in">Category: <Link href="/surgical-gown" rel="tag">Surgical Gown</Link></span>
                  </div>
                  <div class="btn-add-to-cart">
                    <div class="quantity">
                      <input class="minus" type="button" value="-"/>
                      <input type="number" id="quantity_5f0c6f4cb0b78" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric"/>
                      <input class="plus" type="button" value="+"/>
                    </div>
                    <a href="shop-cart.html" class="btn btn-theme-colored1 ml-10">Add to cart</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mt-60">
                <div class="horizontal-tab product-tab">
                  <ul class="nav nav-tabs" id="nav-tab" role="tablist">
                    <li class="nav-item">
                      <button class="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#desc-content" role="tab" aria-controls="desc-content" aria-selected="true"><strong>Description</strong></button>
                    </li>
                    <li class="nav-item">
                      <button class="nav-link" id="addinfo-tab" data-bs-toggle="tab" data-bs-target="#addinfo-content" role="tab" aria-controls="addinfo-content" aria-selected="true"><strong>Additional Information</strong></button>
                    </li>
                 
                  </ul>
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active p-20" id="desc-content" role="tabpanel" aria-labelledby="desc-tab">
                      <p>{description}</p>
                      
                    </div>
                    <div class="tab-pane fade p-20" id="addinfo-content" role="tabpanel" aria-labelledby="addinfo-tab">
                      <table class="table table-striped">
                        <tbody>
                          <tr>
                            <th>Brand</th>
                            <td><p>Naltex</p></td>
                          </tr>
                          <tr>
                            <th>Color</th>
                            <td><p>{color}</p></td>
                          </tr>
                          <tr>
                            <th>Material</th>
                            <td><p>{material}</p></td>
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-60">
              <h4 class="mb-30">Related Products</h4>
              <div class="tm-sc-gallery tm-sc-gallery-grid">

                
                <div id="gallery-holder-618422" class="isotope-layout grid-4 gutter-15 clearfix lightgallery-lightbox">
                  <div class="isotope-layout-inner">
                   
                    <div class="isotope-item cat1 cat3">
                      <div class="isotope-item-inner">
                        <div class="product">
                          <div class="product-header">
                            <div class="thumb image-swap">
                              <a href="shop-product-details.html"><img src="/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                              <a href="shop-product-details.html"><img src="/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
                            </div>
                            <div class="product-button-holder">
                              <ul class="shop-icons">
                                <li class="item"><a href="#" class="button btn-quickview" title="Product quick view"></a></li>
                                <li class="item"><a href="shop-cart.html" class="button tm-btn-add-to-cart">Add to cart</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-details">
                            <span class="product-categories"><a href="#" rel="tag">Music</a></span>
                            <h5 class="product-title"><a href="shop-product-details.html">Product Title</a></h5>
                            <span class="price">
                              <del><span class="amount"><span class="currency-symbol">£</span>18.00</span></del>
                              <ins><span class="amount"><span class="currency-symbol">£</span>16.00</span></ins>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div class="isotope-item cat3">
                      <div class="isotope-item-inner">
                        <div class="product">
                          <div class="product-header">
                            <div class="thumb image-swap">
                              <a href="shop-product-details.html"><img src="/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                              <a href="shop-product-details.html"><img src="/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
                            </div>
                            <div class="product-button-holder">
                              <ul class="shop-icons">
                                <li class="item"><a href="#" class="button btn-quickview" title="Product quick view"></a></li>
                                <li class="item"><a href="shop-cart.html" class="button tm-btn-add-to-cart">Add to cart</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-details">
                            <span class="product-categories"><a href="#" rel="tag">Music</a></span>
                            <h5 class="product-title"><a href="shop-product-details.html">Product Title</a></h5>
                            <span class="price">
                              <del><span class="amount"><span class="currency-symbol">£</span>18.00</span></del>
                              <ins><span class="amount"><span class="currency-symbol">£</span>16.00</span></ins>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="isotope-item cat3">
                      <div class="isotope-item-inner">
                        <div class="product">
                          <div class="product-header">
                            <div class="thumb image-swap">
                              <a href="shop-product-details.html"><img src="/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                              <a href="shop-product-details.html"><img src="/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
                            </div>
                            <div class="product-button-holder">
                              <ul class="shop-icons">
                                <li class="item"><a href="#" class="button btn-quickview" title="Product quick view"></a></li>
                                <li class="item"><a href="shop-cart.html" class="button tm-btn-add-to-cart">Add to cart</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-details">
                            <span class="product-categories"><a href="#" rel="tag">Music</a></span>
                            <h5 class="product-title"><a href="shop-product-details.html">Product Title</a></h5>
                            <span class="price">
                              <del><span class="amount"><span class="currency-symbol">£</span>18.00</span></del>
                              <ins><span class="amount"><span class="currency-symbol">£</span>16.00</span></ins>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div class="isotope-item cat2 cat3">
                      <div class="isotope-item-inner">
                        <div class="product">
                          <div class="product-header">
                            <div class="thumb image-swap">
                              <a href="shop-product-details.html"><img src="/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                              <a href="shop-product-details.html"><img src="/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
                            </div>
                            <div class="product-button-holder">
                              <ul class="shop-icons">
                                <li class="item"><a href="#" class="button btn-quickview" title="Product quick view"></a></li>
                                <li class="item"><a href="shop-cart.html" class="button tm-btn-add-to-cart">Add to cart</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-details">
                            <span class="product-categories"><a href="#" rel="tag">Music</a></span>
                            <h5 class="product-title"><a href="shop-product-details.html">Product Title</a></h5>
                            <span class="price">
                              <del><span class="amount"><span class="currency-symbol">£</span>18.00</span></del>
                              <ins><span class="amount"><span class="currency-symbol">£</span>16.00</span></ins>
                            </span>
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