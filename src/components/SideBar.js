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

                    <li><Link class="ai-icon" href="/dashboard"  aria-expanded="false">
							<i class="flaticon-144-layout"></i><span class="nav-text">Dashboard</span></Link></li>

                    <li><Link class="ai-icon" href="/dashboard/home-offers"  aria-expanded="false">
							<i class="flaticon-144-layout"></i><span class="nav-text">Home Offers</span></Link></li>

                    <li><Link class="ai-icon" href="/dashboard/home-products"  aria-expanded="false">
							<i class="flaticon-144-layout"></i><span class="nav-text">Home Products</span></Link></li>

                    <li id="FMenu" onClick={drop1}><a class="has-arrow ai-icon" href="#"  aria-expanded="false">
							<i class="flaticon-144-layout"></i>
							<span class="nav-text">Medical Clothes</span>
						</a>
                        <ul aria-expanded="false" id="menuUl" class="mm-collapse">
                            <li><Link href="/dashboard/medical-clothes-home">Home</Link></li>
							<li><Link href="/dashboard/surgical-gown">Surgical Gown</Link></li>
							<li><Link href="/dashboard/patient-gown">Patient Gown</Link></li>
							<li><Link href="/dashboard/patient-pants">Patient Pants</Link></li>
							<li><Link href="/dashboard/check-bed-sheet">Check Bed Sheets</Link></li>
							<li><Link href="/dashboard/care-bed-sheet">Care Bed Sheets</Link></li>
							<li><Link href="/dashboard/split-drape">Split Drape</Link></li>
                            <li><Link href="/dashboard/pillow-cover">Pillow Cover</Link></li>
                            <li><Link href="/dashboard/scrub">Scrub</Link></li>
                            <li><Link href="/dashboard/isolation-suits">Isolation Suits</Link></li>
                            <li><Link href="/dashboard/sterilization-paper">Sterilization Paper</Link></li>
                            <li><Link href="/dashboard/child-gown">Child Gown</Link></li>
                          
						</ul>

                    </li>

                    <li id="SMenu" onClick={drop2}><a class="has-arrow ai-icon" href="#" aria-expanded="false">
						<i class="flaticon-077-menu-1"></i>
							<span class="nav-text">Protective Clothes</span>
						</a>
                        <ul aria-expanded="false" id="menuUl2" class="mm-collapse">
                            <li><Link href="/dashboard/protective-clothes-home">Home</Link></li>
                            <li><Link href="/dashboard/lab-coat">Lab Coat</Link></li>
							<li><Link href="/dashboard/paper-elbow">Paper Elbow</Link></li>
                            <li><Link href="/dashboard/coverall">Coverall</Link></li>
                            <li><Link href="/dashboard/overshoes">Overshoes</Link></li>
                            <li><Link href="/dashboard/overhead">Overhead</Link></li>
                        </ul>
                    </li>


                    <li id="TMenu" onClick={drop3}><a class="has-arrow ai-icon" href="#" aria-expanded="false">
							<i class="flaticon-061-puzzle"></i>
							<span class="nav-text">Spa and Hygiene</span>
						</a>
                        <ul aria-expanded="false" id="menuUl3" class="mm-collapse">
                            <li><Link href="/dashboard/beauty-clothes-home">Home</Link></li>
                            <li><Link href="/dashboard/bra">Bra</Link></li>
                            <li><Link href="/dashboard/short">Short</Link></li>
                            <li><Link href="/dashboard/underwear">Underwear</Link></li>
                            <li><Link href="/dashboard/bed-sheet">Bed Sheets</Link></li>
                           
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