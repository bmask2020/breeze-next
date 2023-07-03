import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Naltex Medical Clothes | Home</title>
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

            <div class="side-panel-body-overlay"></div>
<div id="side-panel-container" class="dark" data-tm-bg-img="images/side-push-bg.jpg">
  <div class="side-panel-wrap">
    <div id="side-panel-trigger-close" class="side-panel-trigger"><a href="#"><i class="fa fa-times side-panel-trigger-icon"></i></a></div>
    <img class="logo mb-50" src="images/logo-wide.png" alt="Logo"/>
    <p>Our motive is to help the poor, helpless and orphan children all over the world.</p>
    <div class="widget">
      <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Latest News</h4>
      <div class="latest-posts">
        <article class="post clearfix pb-0 mb-10">
          <a class="post-thumb" href="news-details.html"><img src="images/blog/square1.jpg" alt="images"/></a>
          <div class="post-right">
            <h5 class="post-title mt-0"><a href="news-details.html">Sustainable Construction</a></h5>
            <p>Lorem ipsum dolor...</p>
          </div>
        </article>
        <article class="post clearfix pb-0 mb-10">
          <a class="post-thumb" href="news-details.html"><img src="images/blog/square2.jpg" alt="images"/></a>
          <div class="post-right">
            <h5 class="post-title mt-0"><a href="news-details.html">Industrial Coatings</a></h5>
            <p>Lorem ipsum dolor...</p>
          </div>
        </article>
        <article class="post clearfix pb-0 mb-10">
          <a class="post-thumb" href="news-details.html"><img src="images/blog/square3.jpg" alt="images"/></a>
          <div class="post-right">
            <h5 class="post-title mt-0"><a href="news-details.html">Storefront Installations</a></h5>
            <p>Lorem ipsum dolor...</p>
          </div>
        </article>
      </div>
    </div>

    <div class="widget">
      <h5 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Contact Info</h5>
      <div class="tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
        <ul>
          <li class="contact-name">
            <div class="icon"><i class="flaticon-contact-037-address"></i></div>
            <div class="text">John Doe</div>
          </li>
          <li class="contact-phone">
            <div class="icon"><i class="flaticon-contact-042-phone-1"></i></div>
            <div class="text"><a href="tel:+510-455-6735">+510-455-6735</a></div>
          </li>
          <li class="contact-email">
            <div class="icon"><i class="flaticon-contact-043-email-1"></i></div>
            <div class="text"><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></div>
          </li>
          <li class="contact-address">
            <div class="icon"><i class="flaticon-contact-047-location"></i></div>
            <div class="text">3982 Browning Lane Carolyns Circle, California</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div id="wrapper" class="clearfix">
 
        
    <Navbar />
 
  <div class="main-content-area">
  
    <section id="home" class="">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col">
          
            <img src='frontend/images/bg/bg25.jpg' />
          
           
          </div>
        </div>
      </div>
    </section>

  

    <section>
      <div class="container">
        <div class="section-title text-center mb-30">
          <div class="row">
            <div class="col-md-12">
              <h2>New Collection</h2>
              <p>See what new products are available in online shop</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
	         
	          <div class="isotope-layout-filter filter-style-4 text-left cat-filter-default text-center" data-link-with="gallery-holder-618422">
	            <a href="#" class="active" data-filter="*">All</a>
	            <a href="#" class="" data-filter=".cat1">Cat1</a>
	            <a href="#" class="" data-filter=".cat2">Cat2</a>
	            <a href="#" class="" data-filter=".cat3">Cat3</a>
	          </div>
	         
	          <div id="gallery-holder-618422" class="isotope-layout grid-3 gutter-15 clearfix lightgallery-lightbox">
	            <div class="isotope-layout-inner">
	             
	              <div class="isotope-item cat1 cat3">
	                <div class="isotope-item-inner">
	                  <div class="product">
	                    <div class="product-header">
	                      <span class="onsale">Sale!</span>
	                      <div class="thumb image-swap">
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
	             
	              <div class="isotope-item cat2">
	                <div class="isotope-item-inner">
	                  <div class="product">
	                    <div class="product-header">
	                      <div class="thumb image-swap">
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
	             
	              <div class="isotope-item cat1">
	                <div class="isotope-item-inner">
	                  <div class="product">
	                    <div class="product-header">
	                      <span class="onsale">Sale!</span>
	                      <div class="thumb image-swap">
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
	                        <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
    </section>

    <section class="divider bg-light">
      <div class="container pt-40 pb-40">
        <div class="row">
          <div class="col-md-5 text-center">
            <img alt="images" src="frontend/images/shop/cap.jpg"/>
          </div>
          <div class="col-md-7 text-left">
            <h4 class="mt-50 text-theme-colored1 mb-0">Big discount!</h4>
            <h1 class="mt-0">New Trendy Products</h1>
            <h4 class="mt-10 text-gray">Up to 21% off on all products!</h4>
            <a href="shop-products.html" class="btn btn-theme-colored1 btn-round mt-20">Shop now</a>
          </div>
        </div>
      </div>
    </section>

   
    <section id="shop">
      <div class="container">
        <div class="section-title text-center mb-50">
          <div class="row">
            <div class="col-md-12">
              <h2>Best <span class="text-theme-colored1">Selling</span> Products</h2>
              <p>See our all time best products in online store</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">

            <div id="product-gallery-holder-2222" class="isotope-layout grid-4 gutter-15 clearfix lightgallery-lightbox">
              <div class="isotope-layout-inner">

                <div class="isotope-item cat1 cat3">
                  <div class="isotope-item-inner">
                    <div class="product">
                      <div class="product-header">
                        <span class="onsale">Sale!</span>
                        <div class="thumb image-swap">
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
               
                <div class="isotope-item cat1">
                  <div class="isotope-item-inner">
                    <div class="product">
                      <div class="product-header">
                        <span class="onsale">Sale!</span>
                        <div class="thumb image-swap">
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></a>
                          <a href="shop-product-details.html"><img src="frontend/images/shop/product2.jpg" class="product-hover-image img-responsive img-fullwidth" alt="product"/></a>
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
    </section>

    
    <section class="bg-theme-colored1">
      <div class="container pt-30 pb-20">
        <div class="row">
          <div class="col-md-9">
            <h3 class="text-white text-uppercase font-weight-600">All kind of sell get 20% discount in this season with gift!</h3>
          </div>
          <div class="col-md-2"> 
            <a class="btn btn-theme-colored2 btn-circled" href="#">Shop Now<i class="fa fa-angle-double-right font-16 ml-10"></i></a>  
          </div>
        </div>
      </div>
    </section>
  </div>
  

        <Footer />
  <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
</div>
         
         
        </>
    )
}
