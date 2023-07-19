import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic"
import Swal from 'sweetalert2'
import axios from '@/lib/axios'

function OrderDone() {



    return (
        <>
        <Head>
              <link href="images/favicon.png" rel="shortcut icon" type="image/png"/>
              <link href="images/apple-touch-icon.png" rel="apple-touch-icon"/>
              <link href="images/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>
              <link href="images/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114"/>
              <link href="images/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
                <meta name="description" content="Medinova - Health & Medical HTML Template"/>
                <meta name="keywords" content="clinic, coronavirus, corporate, dental, dentist, doctor, hospital, medical,"/>
                <meta name="author" content="ThemeMascot"/>
                <title>Naltex For Medical Clothes - Contact Us</title>
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
   
    <section id="home" class="fullscreen bg-lightest">
      <div class="display-table text-center">
        <div class="display-table-cell">
          <div class="container pt-0 pb-0">
            <div class="row">
              <div class="col"></div>
              <div class="col-lg-6">
                <i class="fa-solid fa-cart-shopping fa-5x"></i>
                <h2 class="mt-0 mb-10">Payment completed successfully</h2>
                <p>Please return to the home page</p>
                <Link class="btn btn-theme-colored1 btn-sm smooth-scroll" href={'/'}><i class="fa-solid fa-house font-size-16 mr-10"></i>Back To Home</Link>
              </div>
              <div class="col"></div>
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

export default dynamic (() => Promise.resolve(OrderDone), {ssr: false})