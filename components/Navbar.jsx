import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose, GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const navHandler = () =>{
        setNav(!nav)
    }

    useEffect(() => {
        // add/remove "overflow-hidden" class to the body tag when the side nav is opened/closed
        if (nav) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
        console.log('yo')
      }, [nav]);

    return ( 
        <div className="w-full h-20 border-b border-neutral-200 shadow-lg fixed z-40 bg-white overflow-hidden">
            <div className="flex w-full justify-between items-center h-full px-8 overflow-hidden">
                <h1 className="font-semibold text-5xl text-sky-900">
                    <Link href="/">Oscar</Link>
                </h1>
                <div className="text-2xl md:hidden cursor-pointer ">
                    <GiHamburgerMenu onClick={navHandler}/>
                </div>
                
                <ul className="hidden md:flex text-xl gap-10 px-8">
                    <li className="py-4">
                        <Link href="/#experience">
                            Experience
                        </Link>
                    </li>
                            

                    <li className="py-4">
                        <Link href="/#skills">
                            Skills
                        </Link>
                    </li>

                    <li className="py-4">
                        <Link href="/#projects">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Side Nav */}
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full bg-black/60 h-screen z-50" : ''}>
                <div className={nav ? "z-50 w-[70%] bg-white fixed top-0 left-0 h-full p-8 max-[350px]:px-4" : "fixed left-[-100%] top-0 p-8"}>
                    <div className="flex justify-between items-center border-b pb-4">
                        <h1 className="font-semibold text-4xl text-sky-900 " >Oscar</h1>
                        <div className="text-lg rounded-full p-2 shadow-lg shadow-gray-200 cursor-pointer hover:bg-gray-200" onClick={navHandler}>
                            <GrClose />
                        </div>
                    </div>

                    <div className="">
                        <ul className="md:hidden py-4 flex flex-col my-20 text-2xl">
                            
                            <li className="py-4">
                            <Link href="/#experience" onClick={navHandler}>
                                Experience
                                </Link>
                            </li>
                            

                            <li className="py-4">
                            <Link href="/#skills" onClick={navHandler}>
                                Skills
                                </Link>
                            </li>

                            <li className="py-4">
                            <Link href="/#projects" onClick={navHandler}>
                                Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center p-8 max-[450px]:p-4">
                        <h1 className="py-8 text-2xl text-sky-900">Links</h1>
                        <ul className="max-[300px]:flex-col items-center flex w-full justify-evenly">
                            <Link href={"https://www.linkedin.com/in/oscar-ibarra-csun/"} >
                                <li className="rounded-full p-2 shadow-lg shadow-gray-200 text-3xl hover:bg-gray-200">
                                    <GrLinkedinOption />
                                </li>
                            </Link>
                            
                            <Link href={"https://github.com/oscar72324"} >
                                <li className="rounded-full p-2 shadow-lg shadow-gray-200 text-3xl hover:bg-gray-200">
                                    <GrGithub />
                                </li>
                            </Link>

                            <Link href="mailto:Oscaribarra72@hotmail.com">
                                <li className="rounded-full p-2 shadow-lg shadow-gray-200 text-3xl hover:bg-gray-200">
                                    <GrMail />
                                </li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;