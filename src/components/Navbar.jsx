import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { Link } from 'react-router-dom';
const Navbar = () => {

	const [menu, setMenu] = useState(false);

    return ( 
		<>

<header className="w-full bg-gray-800 text-white lg:rounded-7 z-50">
            <nav className="w-94 mx-auto bg-yellow flex justify-between lg:h-28 h-20 items-center">
				<div>
					<h3 className='text-3xl'>Mo' <br/> &nbsp; Fola</h3>
				</div>
              	<ul className='lg:flex h-full items-center hidden nav'>
								<li className="px-5">
									<a href="#Home">Home</a>
								</li>
								<li className="px-5">
									<a href="#About">About</a>
								</li>
								<li className="px-5">
									<a href="#resume">Resume</a>
								</li>
								<li className="px-5">
									<a href="#portfolio">Portfolio</a>
								</li>
								<li className="px-5">
									<a href="#Contact">Contact</a>
								</li>
								<li className="px-5">
									<a href="#download">Download CV</a>
								</li>
							</ul>

							
				<button className="hamburger px-4 cursor-pointer block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </button>
							{/* <button className="px-4 cursor-pointer block lg:hidden setMenu" id="burger">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
               </button> */}
            </nav>
			
        </header>

		<div className="" id='menu'>
				
			<ul className="text-black text-lg uppercase block md:hidden items-center h-full text-right">
                        
                        <li className="">
                                <a href="#Home">Home</a> 
                        </li>
                        <li>
                                <a href="#About" >About</a >
                        </li>
                        <li>
                                <a href="#resume">Resume</a>
                        </li>
                        <li>
                                <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                                <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="/">Download CV</a>
                        </li>
                                
                    </ul>
			</div>
		</>
     
	


			


     );
}
 
export default Navbar;