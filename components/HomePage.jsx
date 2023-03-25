import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose, GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['text-sky-900', 'text-blue-500', 'text-sky-700']; 

    useEffect(() => {
        const intervalId = setInterval(() => {
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000); // Change this to the interval you want in milliseconds (e.g. 500 for half a second)
    
        return () => clearInterval(intervalId);
      }, []);

    return ( 
        <div className="w-full pt-20 sm:p-0 h-screen">
            <div className="flex flex-col items-center justify-center h-full w-1/2 mx-auto">
                {/* Opening Hero */}
                <header className="text-center font-bold text-4xl md:text-7xl py-4">
                    <h1 className="py-4">
                        Hi, I'm <span className={`${
                                    colorIndex > 0 ? colors[colorIndex - 1] : ''
                                    } ${colors[colorIndex]} transition-colors duration-500`}>
                                        Oscar
                                </span> 
                    </h1>
                    <h1 className="py-4">
                       A software developer
                    </h1>
                </header>

                {/* Summary of myself */}
                <div className="text-center text-sm md:text-lg font-light py-4 max-[300px]:text-xs">
                    <p>
                    As a software developer, I am committed to building robust and scalable 
                    solutions that meet the needs of today's fast-paced digital landscape. 
                    With a wide range of skills and expertise, I am able to take on projects
                    of all shapes and sizes.
                    </p>
                </div>

                {/* Links */}
                <div className="w-full">
                    <ul className="max-[300px]:flex-col items-center flex w-full justify-center gap-4 max-[300px]:hidden ">
                    <Link href={"https://www.linkedin.com/in/oscar-ibarra-csun/"} >
                                <li className="rounded-full p-2 shadow-lg shadow-gray-200 text-lg md:text-3xl hover:bg-gray-200">
                                    <GrLinkedinOption />
                                </li>
                            </Link>
                            
                            <Link href={"https://github.com/oscar72324"} >
                                <li className="rounded-full p-2 shadow-lg shadow-gray-200 text-lg md:text-3xl hover:bg-gray-200">
                                    <GrGithub />
                                </li>
                            </Link>

                            <Link href="mailto:Oscaribarra72@hotmail.com">
                                <li className="rounded-full p-2 shadow-lg shadow-gray-200 text-lg md:text-3xl hover:bg-gray-200">
                                    <GrMail />
                                </li>
                            </Link>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;