import Link from 'next/link'
import dynamic from "next/dynamic"
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Swal from 'sweetalert2'


const Navbar = () => {


  const { logout } = useAuth()
  const { user } = useAuth({ middleware: 'guest' })
  const [cartCount, setCartCount] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  useEffect(() => {

      async function getData() {
          const query = await fetch('http://127.0.0.1:8000/api/get-cart');
          const response = await query.json();
          // console.log('response from API ', response);
          setCartCount(response.data);
          setCart(response.data2);
          setCartTotal(response.data3);
          console.log(response.data3)
        }

        getData();
        
  }, []);


  const dropdown1Display = () => {
   
   var Ele1 = document.getElementById('Drop1');
   Ele1.style.display = 'block';

  }


  const dropdown1Hidden = () => {
   
  
 
    var Ele1 = document.getElementById('Drop1');
    Ele1.style.display = 'none';
 
   }



   const dropdown2Display = () => {
   
   var Ele1 = document.getElementById('Drop2');
   Ele1.style.display = 'block';

  }


  const dropdown2Hidden = () => {
   
  
 
    var Ele1 = document.getElementById('Drop2');
    Ele1.style.display = 'none';
 
   }


   const dropdown3Display = () => {
   
    var Ele1 = document.getElementById('Drop3');
    Ele1.style.display = 'block';
 
   }
 
 
   const dropdown3Hidden = () => {
    
   
  
     var Ele1 = document.getElementById('Drop3');
     Ele1.style.display = 'none';
  
    }


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
        <header id="header" className="header header-layout-type-header-2rows">
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-auto header-top-left align-self-center text-center text-xl-left">
            <ul className="element contact-info">
              <li className="contact-phone"><i className="fa fa-phone font-icon sm-display-block"></i> Tel: +440-98-5298</li>
              <li className="contact-email"><i className="fa fa-envelope font-icon sm-display-block"></i>  
              {user ? ( 
              <Link href="/dashboard" className="text-sm text-gray-700 underline">Dashboard</Link>
              ) : (

                <Link href="/login" className="text-sm text-gray-700 underline"> Login</Link>

              )}
              </li>
              <li className="contact-address"><i className="fa fa-map font-icon sm-display-block"></i> 
              {user ? ( 

              <Link href="#" onClick={logout} className="ml-4 text-sm text-gray-700 underline"> Logout</Link>
              
              ) : (

                <Link href="/register" className="ml-4 text-sm text-gray-700 underline"> Register</Link>

                )}
              </li>
            </ul>
          </div>
          <div className="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-right">
            <div className="element pt-0 pb-0">
              <ul className="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                <li><a className="social-link" href="#" ><i className="fab fa-facebook"></i></a></li>
                <li><a className="social-link" href="#" ><i className="fab fa-twitter"></i></a></li>
                <li><a className="social-link" href="#" ><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
         
          </div>
        </div>
      </div>
    </div>
    <div className="header-nav tm-enable-navbar-hide-on-scroll">
      <div className="header-nav-wrapper navbar-scrolltofixed">
        <div className="menuzord-container header-nav-container">
          <div className="container position-relative">
            <div className="row header-nav-col-row">
              <div className="col-sm-auto align-self-center">
                <a className="menuzord-brand site-brand" href="index-mp-layout1.html">
                  <img className="logo-default logo-1x" src="/frontend/images/logo-wide.png" alt="Logo"/>
                  <img className="logo-default logo-2x retina" src="frontend/images/logo-wide@2x.png" alt="Logo"/>
                </a>
              </div>
              <div className="col-sm-auto ms-auto pr-0 align-self-center">
                <nav id="top-primary-nav" className="menuzord theme-color2" data-effect="slide" data-animation="none" data-align="right">
                  <ul id="main-nav" className="menuzord-menu">
                    <li className="active menu-item">
                      <Link href="/">Home</Link>
                    </li>
                  
                  
                    <li className="menu-item" onMouseMove={dropdown1Display} onMouseLeave={dropdown1Hidden}><a href="#">Medical Clothes</a>
                      <ul className="dropdown" id="Drop1">
                        <li><Link href="/surgical-gown">Surgical Gown</Link></li>
                        <li><Link href="/patient-gown">Patien Gown</Link></li>
                        <li><Link href="/patient-pants">Patient Pants</Link></li>
                        <li><Link href="/check-bed-sheet">Check Bed Sheets</Link></li>
                        <li><Link href="/care-bed-sheet">Care Bed Sheets</Link></li>
                        <li><Link href="/split-drape">Split Drape</Link></li>
                        <li><Link href="/pillow-cover">Pillow Cover</Link></li>
                        <li><Link href="/scrub">Scrub</Link></li>
                        <li><Link href="/isolation-suits">Isolation Suits</Link></li>
                        <li><Link href="/sterilization-paper">Sterilization Paper</Link></li>
                        <li><Link href="/child-gown">Child Gown</Link></li>
                        
                      </ul>
                    </li>


                    <li className="menu-item" onMouseMove={dropdown2Display} onMouseLeave={dropdown2Hidden}><a href="#">Protective Clothes</a>
                      <ul className="dropdown" id="Drop2">
                        <li><Link href="/lab-coat">Lab Coat</Link></li>
                        <li><Link href="/paper-elbow">Paper Elbow</Link></li>
                        <li><Link href="/coverall">Coverall</Link></li>
                        <li><Link href="/overshoes">Overshoes</Link></li>
                        <li><Link href="/overhead">Overhead</Link></li>
                      </ul>
                    </li>


                    <li className="menu-item" onMouseMove={dropdown3Display} onMouseLeave={dropdown3Hidden}><a href="#">Spa and Hygiene</a>
                      <ul className="dropdown" id="Drop3">
                        <li><Link href="/bra">Bra</Link></li>
                        <li><Link href="/short">Short</Link></li>
                        <li><Link href="/underwear">Underwear</Link></li>
                        <li><Link href="/bed-sheets">Bed Sheets</Link></li>
                      </ul>
                    </li>

                    <li className="menu-item">
                      <Link href="/about">About</Link>
                    </li>

                    <li className="menu-item">
                      <Link href="/contact">Contact</Link>
                    </li>
                 
                  </ul>
                </nav>
              </div>
              <div className="col-sm-auto align-self-center nav-side-icon-parent">
                <ul className="list-inline nav-side-icon-list">
                
                  <li className="hidden-mobile-mode">
                    <div className="top-nav-mini-cart-icon-container">
                      <div className="top-nav-mini-cart-icon-contents">

                      
                        {user ? ( 
                                <Link href="/shopping-cart" className="mini-cart-icon" title="View your shopping cart"><img src="/frontend/images/shopping-cart.png" width="25" alt="cart"/><span className="items-count">{cartCount}</span> <span className="cart-quick-info">1 item - <span className="amount"><span className="currencySymbol">&pound;</span>18.00</span></span></Link>
                                ) : (

                                  <Link href="/login" className="mini-cart-icon" title="View your shopping cart"> <img src="/frontend/images/shopping-cart.png" width="25" alt="cart"/><span className="items-count">{cartCount}</span> <span className="cart-quick-info">1 item - <span className="amount"><span className="currencySymbol">&pound;</span>18.00</span></span></Link>

                                )}

                        <div className="dropdown-content">
                          <ul className="cart_list product_list_widget">
                            <li className="mini_cart_item">

                            {

                                cart.map((val, index) => {

                                  let cart = 'cart'; 
                                return(
                                  <>
                                  <form onSubmit={cartRemove} id={cart + val.id}>
                                  <input type='hidden' name="id" value={val.id} />
                                  <button style={{color:'#e81123', border:'none', background:'inherit', fontWeight:'600'}} type='submit' className="remove remove_from_cart_button" aria-label="Remove this item">&times;</button>
                                  </form>
                                  <a href="#"> <img className="attachment-thumbnail" src={'http://127.0.0.1:8000/' + val.img} width="300" height="300" alt="images"/>{val.name}</a>
                                  <span className="quantity">{val.quantity}  X<span className="amount">
                                  <span className="currencySymbol"></span> {val.price} EGP</span></span>
                                  </>
                                )

                             
                              })
                            }

                              

                            </li>
                          </ul>
                          <p className="total"> <strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><span className="currencySymbol"></span>{cartTotal} EGP</span> </p>
                          <div className="buttons cart-action-buttons">
                            <div className="row">
                              <div className="col-6 pe-0">

                                {user ? ( 
                                <Link href="/shopping-cart" className="btn btn-theme-colored2 btn-block btn-sm wc-forward">View Cart</Link>
                                ) : (

                                  <Link href="/login" className="btn btn-theme-colored2 btn-block btn-sm wc-forward"> View Cart</Link>

                                )}
                               

                              </div>


                              <div className="col-6 pe-1">
                                
                                {user ? ( 
                                <Link href="/checkout" className="btn btn-theme-colored2 btn-block btn-sm wc-forward">Checkout</Link>
                                ) : (

                                  <Link href="/login" className="btn btn-theme-colored2 btn-block btn-sm wc-forward"> View Cart</Link>

                                )}
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                
                </ul>
             
              </div>
            </div>
            <div className="row d-block d-xl-none">
               <div className="col-12">
                <nav id="top-primary-nav-clone" className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                 <ul id="main-nav-clone" className="menuzord-menu menuzord-right menuzord-indented scrollable">
                 </ul>
                </nav>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})