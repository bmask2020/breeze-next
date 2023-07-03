import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Naltex For Medical Clothes</title>
              
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png"/>
                <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet"/>
                <link href="/css/style.css" rel="stylesheet"/>
            </Head>

            <div className="font-sans text-gray-900 antialiased" style={{backgroundColor:'#2C254A', height:'100vh'}}>
                {children}
            </div>

            <script src="/vendor/global/global.min.js"></script>
            <script src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
            <script src="/js/custom.min.js"></script>
            <script src="/js/deznav-init.js"></script>
        </div>
    )
}

export default GuestLayout
