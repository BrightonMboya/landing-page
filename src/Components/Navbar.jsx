import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import  Link  from "next/link";
import Image from "next/image";
import Logo from "./UI/Logo";
import { AUTH_TOKEN, USER } from "./constant";
function Navbar() {
	const handleLogout = () => {
		localStorage.removeItem(AUTH_TOKEN);
		localStorage.removeItem(USER);
		router.push("/")
		toast.success("Logged out succesfully")
	  }
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-xl fixed w-full z-10">
			<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex mt-5 justify-center items-center flex-shrink-0 ">
								<Logo />
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										
										href="/"
									
										className="cursor-pointer text-green font-semibold px-3 py-2 text-md hover:font-black"
									>
										<a className="text-white">Home</a>
									</Link>
									<Link
										activeClass="about"
										href="/"
										
										className="cursor-pointer hover:bg-green text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										<a className="text-white">Explore Areas</a>
									</Link>
									<Link
									
										href="/"
										
										className="cursor-pointer hover:bg-green text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										<a className="text-white">Contact</a>
									</Link>

									<Link
										
										href="/register"
									
										className="cursor-pointer hover:bg-green text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										<a className="text-white">Register</a>
									</Link>

			
										<button className="text-white" onClick={handleLogout}>Logout</button>
									

									<Link
								
									
										href="/apply"
									
										className="cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
									<a className=" bg-green h-[5vh] w-[8vw] rounded shodow-md text-white flex justify-center items-center">Apply for Visa</a>	
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-green inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white flex flex-col  px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/"
								
									to="home"
									
									className="cursor-pointer hover:bg-green text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/"
									
									to="explore"
									
									className="cursor-pointer hover:bg-green text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Explre areas
								</Link>

								<Link
									href="/contact"
									
									to="work"
									
									className="cursor-pointer hover:bg-green text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>
								<Link
									href="/Register"
									
									to="register"
									
									className="cursor-pointer hover:bg-green text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Register
								</Link>

								<button className="text-left" onClick={handleLogout}>Logout</button>
								<Link
								
									
										href="/apply"
									
										className="cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
									<a className=" bg-green h-[5vh] w-[22vw] rounded shodow-md text-white flex justify-center items-center">Apply for Visa</a>	
									</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
