import Link from 'next/link'

export default function Footer() {

    return (

        <>
         <footer id="footer" class="footer">
    <div class="footer-widget-area">
      <div class="container pt-90 pb-60">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
              <div class="thumb">
                <img alt="Logo" src="/frontend/images/logo-wide-white.png" style={{width:'6rem'}}/>
              </div>
              <div class="description">203, Envato Labs, Behind Alis Steet, Melbourne, Australia.immersion along the information close the loop on focusing</div>
            </div>
            <ul class="styled-icons icon-dark icon-theme-colored1 icon-rounded clearfix">
              <li><a class="social-link" href="#" ><i class="fab fa-facebook"></i></a></li>
              <li><a class="social-link" href="#" ><i class="fab fa-twitter"></i></a></li>
              <li><a class="social-link" href="#" ><i class="fab fa-youtube"></i></a></li>
              <li><a class="social-link" href="#" ><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
      
          <div class="col-md-6 col-lg-6 col-xl-6">
            <div class="widget widget_nav_menu split-nav-menu clearfix">
              <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Links</h4>
              <ul>
                <li><Link href="/products-shipping">Products Shipping</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/terms-and-condition">Terms and Conditions</Link></li>
                <li><Link href="/refund-policy">refund & return Policy</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                
                
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-3">
            <div class="widget">
              <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Opening Hours</h4>
              <div class="opening-hours border-dark">
                <ul>
                  <li class="clearfix"> <span> Friday - Saturday :  </span>
                    <div class="value"> 10.00 am - 6.00 pm </div>
                  </li>
                  <li class="clearfix"> <span> Monday - Thusday :</span>
                    <div class="value"> 8.00 am - 9.00 pm </div>
                  </li>
                  <li class="clearfix"> <span> Sunday : </span>
                    <div class="value"> Closed </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom" data-tm-bg-color="#2A2A2A">
        <div class="container">
          <div class="row pt-20 pb-20">
            <div class="col-sm-6">
              <div class="footer-paragraph">
                © 2021 ThemeMascot. All Rights Reserved.
              </div>
            </div>
            <div class="col-sm-6">
              <div class="footer-paragraph text-right">
                Site Template
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
        </>
    )
}