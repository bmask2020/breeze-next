import dynamic from "next/dynamic"
import Link from 'next/link'

function SideBar() {

    const drop1 = () => {
   
        var Ele1 = document.getElementById('FMenu');
        Ele1.classList.toggle('mm-active');

        var Ele2 = document.getElementById('menuUl');

        Ele2.classList.toggle('mm-show');
     
    }



    const drop2 = () => {
   
    var Ele2 = document.getElementById('menuUl2');
    Ele2.classList.toggle('mm-show');
     
    }


    const drop3 = () => {
   
        var Ele2 = document.getElementById('menuUl3');
        Ele2.classList.toggle('mm-show');
         
        }

    return (

        <>
           <div class="deznav">
            <div class="deznav-scroll">
				<br />
				<ul class="metismenu" id="menu">

                    <li><a class="ai-icon" href="#"  aria-expanded="false">
							<i class="flaticon-144-layout"></i><span class="nav-text">Dashboard</span></a></li>

                    <li id="FMenu" onClick={drop1}><a class="has-arrow ai-icon" href="#"  aria-expanded="false">
							<i class="flaticon-144-layout"></i>
							<span class="nav-text">Medical Clothes</span>
						</a>
                        <ul aria-expanded="false" id="menuUl" class="mm-collapse">
							<li><Link href="/dashboard/surgical-gown">Surgical Gown</Link></li>
							<li><Link href="/dashboard/patient-gown">Patient Gown</Link></li>
							<li><Link href="/dashboard/patient-pants">Patient Pants</Link></li>
							<li><Link href="/dashboard/check-bed-sheet">Check Bed Sheets</Link></li>
							<li><Link href="/dashboard/care-bed-sheet">Care Bed Sheets</Link></li>
							<li><Link href="/dashboard/split-drape">Split Drape</Link></li>
                            <li><Link href="/dashboard/pillow-cover">Pillow Cover</Link></li>
                            <li><a href="market-capital.html">Scrub</a></li>
                            <li><a href="market-capital.html">Isolation Suits</a></li>
                            <li><a href="market-capital.html">Sterilization Paper</a></li>
                            <li><a href="market-capital.html">Child Gown</a></li>
                          
						</ul>

                    </li>

                    <li id="SMenu" onClick={drop2}><a class="has-arrow ai-icon" href="#" aria-expanded="false">
						<i class="flaticon-077-menu-1"></i>
							<span class="nav-text">Protective Clothes</span>
						</a>
                        <ul aria-expanded="false" id="menuUl2" class="mm-collapse">
                            <li><a href="./app-profile.html">Lab Coat</a></li>
							<li><a href="./post-details.html">Paper Elbow</a></li>
                            <li><a href="./app-calender.html">Coverall</a></li>
                            <li><a href="./app-calender.html">Overshoes</a></li>
                            <li><a href="./app-calender.html">Overhead</a></li>
                        </ul>
                    </li>


                    <li id="TMenu" onClick={drop3}><a class="has-arrow ai-icon" href="#" aria-expanded="false">
							<i class="flaticon-061-puzzle"></i>
							<span class="nav-text">Spa and Hygiene</span>
						</a>
                        <ul aria-expanded="false" id="menuUl3" class="mm-collapse">
                            <li><a href="./chart-flot.html">Bra</a></li>
                            <li><a href="./chart-morris.html">Short</a></li>
                            <li><a href="./chart-chartjs.html">Underwear</a></li>
                            <li><a href="./chart-chartist.html">Bed Sheets</a></li>
                           
                        </ul>
                    </li>

                    <li><a class="ai-icon" href="#"  aria-expanded="false">
							<i class="flaticon-144-layout"></i><span class="nav-text">Logout</span></a></li>

                </ul>
				
			</div>
        </div>
        </>
    )
}

export default dynamic (() => Promise.resolve(SideBar), {ssr: false})