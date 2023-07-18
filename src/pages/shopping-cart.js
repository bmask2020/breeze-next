import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

function ShoppingCart() {

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


  const cartRemove = async(e) => {

    e.preventDefault();
    const formData = e.target.getAttribute('id');
    const getForm = document.getElementById(formData).elements;
    const id = getForm['0'].value;

    let formData2 = new FormData()
    formData2.append('id',id);
    
    axios.post('http://127.0.0.1:8000/api/remove-cart', formData2).then(response => 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product Removed Success',
      showConfirmButton: false,
      timer: 1500
    }),
  
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
                    {

                    records.map((val, index) => {
                      let cart = 'cart'; 
                    return(
                      <>
                      <tr className="cart_item">
                      <td className="product-remove">
                        <form onSubmit={cartRemove} id={cart + val.id}>
                        <input type='hidden' name="id" value={val.id} />
                        <button type='submit' title="Remove this item" className="remove" style={{border:'none'}}>×</button>
                        </form>
                      </td>
                      <td className="product-thumbnail"><a href="#"><img alt="product" src={'http://127.0.0.1:8000/' + val.img}/></a></td>
                      <td className="product-name"><a href="#">{val.name}</a>
                        <ul className="variation">
                          <li className="variation-size">Color: <span>{val.color}</span></li>
                        </ul></td>
                      <td className="product-price"><span className="amount">{val.price} EGP</span></td>
                      <td className="product-quantity"><div className="quantity buttons_added">
                          <input type="button" className="minus" value="-"/>
                          <input type="number" size="4" className="input-text qty text" title="Qty" value={val.quantity} name="quantity" min="1" step="1"/>
                          <input type="button" className="plus" value="+"/>
                        </div></td>
                      <td className="product-subtotal"><span className="amount">{val.quantity * val.price} EGP</span></td>
                    </tr>
                      </>
                    )


                    })
                    }
                    
                 
                  </tbody>
                </table>
              </div>
            </div>

              <div className="col-md-12 mt-30">
                <div className="row">
              
                 
                  <div className="col-md-5">
                    <h4>Total Including Tax	</h4>
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td>{cartTotal} EGP</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link className="cart-checkout-button btn btn-theme-colored1" href={'/checkout'}>Proceed to Checkout</Link> </div>
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