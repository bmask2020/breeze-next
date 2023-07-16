import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Scrub() {

  const [records, setRecords] = useState([]);
   
  useEffect(() => {

      async function getData() {
          const query = await fetch('http://127.0.0.1:8000/api/scrub');
          const response = await query.json();
          // console.log('response from API ', response);
          setRecords(response);

        }

        getData();
        
  }, []);

  const addCart = async(e) => {

    e.preventDefault();
    const formData = e.target.getAttribute('id');
    const getForm = document.getElementById(formData).elements;

  
    const code = getForm['0'].value;
    const name = getForm['1'].value;
    const price = getForm['2'].value;
    const material = getForm['3'].value;
    const color = getForm['4'].value;
    const img = getForm['5'].value;
    const quantity = getForm['6'].value;

    let formData2 = new FormData()
    formData2.append('code',code);
    formData2.append('name', name);
    formData2.append('price', price);
    formData2.append('material', material);
    formData2.append('color', color);
    formData2.append('img', img);
    formData2.append('quantity', quantity);
   

    axios.post('http://127.0.0.1:8000/api/add-cart', formData2).then(response => 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product Add Success',
      showConfirmButton: false,
      timer: 1500
    })
    ).catch(error => console.log(error));


  }

    return (
        <>
        <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Scrub</title>
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
              <h2 class="title">Scrub</h2>
              <nav class="breadcrumbs" role="navigation" aria-label="Breadcrumbs">
                <div class="breadcrumbs">
                  <span><Link href="/" rel="home">Home</Link></span>
                  <span><i class="fa fa-angle-right"></i></span>
                  <span><a href="#">Scrub</a></span>
                  
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

                    let cart = 'scrub';

                    return(

                      <div class="isotope-item cat1 cat3">
                      <div class="isotope-item-inner">
                        <div class="product">
                          <div class="product-header">
                            <div class="thumb image-swap">
                              <Link href={'/scrub/' + val.id}><img src={'http://127.0.0.1:8000/' + val.img} class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></Link>
                              <Link href={'/scrub/' + val.id}><img src={'http://127.0.0.1:8000/' + val.thumbnail} class="product-hover-image img-responsive img-fullwidth" alt="product"/></Link>
                            </div>
                            <div class="product-button-holder">
                              <ul class="shop-icons">
                                <li class="item"><Link href={'/scrub/' + val.id} class="button btn-quickview" title="Product quick view"></Link></li>
                                <li class="item">
                                  <form onSubmit={addCart} id={cart + val.id}>
                                    <input type='hidden' id='code' name='code' value={val.code} />
                                    <input type='hidden' id='name' name='name' value={val.name} />
                                    <input type='hidden' id='price' name='price' value={val.price} />
                                    <input type='hidden' id='material' name='material' value={val.material} />
                                    <input type='hidden' id='color' name='color' value={val.color} />
                                    <input type='hidden' id='img' name='img' value={val.img} />
                                    <input type='hidden' id='quantity' name='quantity' value='1' />
                                    <button type='submit' class="button tm-btn-add-to-cart">Add to cart</button>
                                  </form>  
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="product-details">
                            <span class="product-categories"><a href="#" rel="tag">Scrub</a></span>
                            <h5 class="product-title"><a href={'/scrub/' + val.id}>{val.name}</a></h5>
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