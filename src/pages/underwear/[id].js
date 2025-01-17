import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"
import Swal from 'sweetalert2'

function Underwear() {

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
        const myId = url.substring(32);

          
          let formData = new FormData()

          formData.append('id', myId);
   
           axios
               .post('http://127.0.0.1:8000/api/underwear/product', formData)
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
   

               async function getData() {
                const query = await fetch('http://127.0.0.1:8000/api/underwear/related');
                const response = await query.json();
                // console.log('response from API ', response);
                setRecords(response.data);
                console.log(response.data);
    
              }
    
              getData();


    }, []);


    const addCart = async(e) => {

      e.preventDefault();
      const formData = e.target.getAttribute('id');
      const getForm = document.getElementById(formData).elements;
  
    
      const code = getForm['3'].value;
      const name = getForm['4'].value;
      const price = getForm['5'].value;
      const material = getForm['6'].value;
      const color = getForm['7'].value;
      const img = getForm['8'].value;
      const quantity = getForm['1'].value;
  
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


    const addCart2 = async(e) => {

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
                <meta name="description" content={pageDescrition}/>
                <meta name="keywords" content={pageKeywords}/>
                <meta name="author" content="Naltex For Medical Clothes"/>
                <title>Naltex For Medical Clothes - {pageTitle}</title>
                <link href="/frontend/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
                <link href="/frontend/css/animate.min.css" rel="stylesheet" type="text/css"/>
                <link href="/frontend/css/javascript-plugins-bundle.css" rel="stylesheet"/>
                <link href="/frontend/js/menuzord/css/menuzord.css" rel="stylesheet"/>
                <link href="/frontend/css/style-main.css" rel="stylesheet" type="text/css"/>
                <link id="menuzord-menu-skins" href="/frontend/css/menuzord-skins/menuzord-rounded-boxed.css" rel="stylesheet"/>
                <link href="/frontend/css/responsive.css" rel="stylesheet" type="text/css"/>
                <link href="/frontend/css/colors/theme-skin-color-set1.css" rel="stylesheet" type="text/css"/>
                <script src="/frontend/js/jquery.js"></script>
                <script src="/frontend/js/popper.min.js"></script>
                <script src="/frontend/js/bootstrap.min.js"></script>
                <script src="/frontend/js/javascript-plugins-bundle.js"></script>
                <script src="/frontend/js/menuzord/js/menuzord.js"></script>
               
                <script src="/frontend/js/custom.js"></script>
            </Head>
            <Navbar />
            <div class="main-content-area">
   
    <section class="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" style={{backgroundImage:'url("/frontend/images/bg/bg1.jpg")'}}>
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
                    <span class="posted_in">Category: <Link href="/underwear" rel="tag">Underwear</Link></span>
                  </div>
                  <div class="btn-add-to-cart">
                    <form onSubmit={addCart} id='protectivePro'>
                      <div class="quantity">
                          <input class="minus" type="button" value="-"/>
                          <input type="number" id='quantity' name='quantity' class="input-text qty text" step="1" min="1" max="" value="1" title="Qty" size="4" placeholder="" inputmode="numeric"/>
                          <input class="plus" type="button" value="+"/>
                      </div>
                        <input type='hidden' id='code' name='code' value={code} />
                        <input type='hidden' id='name' name='name' value={name} />
                        <input type='hidden' id='price' name='price' value={price} />
                        <input type='hidden' id='material' name='material' value={material} />
                        <input type='hidden' id='color' name='color' value={color} />
                        <input type='hidden' id='img' name='img' value={image} />
                        <button type='submit' class="btn btn-theme-colored1 ml-10">Add to cart</button>
                    </form>
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
                   
                  {

records.map((val, index) => {

  let cart = 'UnderwearRelatedPro';

  return(

    <div class="isotope-item cat1 cat3">
    <div class="isotope-item-inner">
      <div class="product">
        <div class="product-header">
          <div class="thumb image-swap">
            <Link href={'/short/' + val.id}><img src={'http://127.0.0.1:8000/' + val.img} class="product-main-image img-responsive img-fullwidth" width="300" height="300" alt="product"/></Link>
            <Link href={'/short/' + val.id}><img src={'http://127.0.0.1:8000/' + val.thumbnail} class="product-hover-image img-responsive img-fullwidth" alt="product"/></Link>
          </div>
          <div class="product-button-holder">
            <ul class="shop-icons">
              <li class="item"><Link href={'/short/' + val.id} class="button btn-quickview" title="Product quick view"></Link></li>
              <li class="item">
                <form onSubmit={addCart2} id={cart + val.id}>
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
          <span class="product-categories"><a href="#" rel="tag">Short</a></span>
          <h5 class="product-title"><a href={'/short/' + val.id}>{val.name}</a></h5>
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
      </div>
    </section>
  </div>
  
  <Footer />
        </>
    )
}

export default dynamic (() => Promise.resolve(Underwear), {ssr: false})