import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import NavHeader from '../NavHeader'
import ChatBox from '../ChatBox'
import Header from '../Header'
import SideBar from '../SideBar'
import AdminFooter from '../AdminFooter'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (

        
        <div className="min-h-screen bg-gray-100">
             <Head>
                <title>Naltex For Medical Clothes</title>
              
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png"/>
                <link rel="stylesheet" href="/vendor/chartist/css/chartist.min.css"/>
                <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet"/>
                <link href="/vendor/owl-carousel/owl.carousel.css" rel="stylesheet"/>
                <link href="/css/style.css" rel="stylesheet"/>
            </Head>

            {/* <Navigation user={user} /> */}

            {/* Page Heading */}
          

            {/* Page Content */}
            <div>
                <NavHeader />
                <ChatBox/>
                <Header />
                <SideBar />
                {children}
                <AdminFooter />
                </div>

            <script src="/vendor/global/global.min.js"></script>
            <script src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
            <script src="/vendor/chart.js/Chart.bundle.min.js"></script>
            
           
            <script src="/vendor/peity/jquery.peity.min.js"></script>
            
          
            <script src="/vendor/apexchart/apexchart.js"></script>
            
           
            <script src="/js/dashboard/dashboard-1.js"></script>
            
            <script src="/vendor/owl-carousel/owl.carousel.js"></script>
            <script src="/js/custom.min.js"></script>
            <script src="/js/deznav-init.js"></script>
        </div>
    )
}

export default AppLayout
