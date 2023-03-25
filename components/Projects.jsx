import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import clash from "@/public/assets/ClashPic.png"
import portfolio from "@/public/assets/PortfolioPic.png"
import pokedex from "@/public/assets/pokedex.png"
import greetings from "@/public/assets/Greeting.png"
import { FiExternalLink } from "react-icons/fi"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {

    const projects = [
        {
            title: "Clash Royale App",
            stack: ["NextJs", "Tailwind", "React", ],
            image: clash,
            link: "/ClashPage"
        },
        {
            title: "Personal Portfolio",
            stack: ["NextJs", "Tailwind", "React", ],
            image: portfolio,
            link: "/PortfolioPage"
        },
        // {
        //     title: "React Pokemon Pokedex",
        //     stack: ["React", "CSS"],
        //     image: pokedex
        // },
        // {
        //     title: "Greetings App",
        //     stack: ["HTML", "CSS", "JS" ],
        //     image: greetings
        // },
    ]

    return ( 
        <div id="projects" className="w-full h-screen">
            <div className="max-[] w-full h-full flex flex-col mx-auto items-center justify-center max-[450px]:p-2 p-12 lg:p-20">
                <header className="w-full h-auto md:h-1/3 text-left py-8 sm:py-20">
                        <h1 className="text-gray-400 text-lg md:text-2xl p-0 sm:py-4">// Projects</h1>
                        <h1 className="font-bold text-2xl md:text-5xl  p-0 sm:py-4">What I've Made</h1>
                </header>

                {/* Projects */}
                <div className="w-full max-400 h-auto">
                    <div className="flex flex-col sm:flex-row w-2/3 sm:w-full justify-around  z-10 h-full gap-8 mx-auto">
                        {projects.map(proj => (
                            <div className="h-auto w-full md:w-full shadow-lg rounded-lg border group relative bg-gray-200 z-10">

                                <Image 
                                    className="w-full h-auto  xl:h-4/5 object-contain lg:object-fill rounded-lg group-hover:opacity-10: z " 
                                    src={proj.image} 
                                    width="1000" 
                                    height="100"
                                />                                
                                <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-90 transition-opacity rounded-lg">
                                <div className="text-white text-center flex justify-center items-center h-full">
                                    <Link href={proj.link} className="flex justify-center items-center">
                                        <h2 className="text-sm sm:text-2xl font-bold pr-2">
                                            More Info
                                        </h2>
                                        <div>
                                            <FiExternalLink />
                                        </div>
                                    </Link>
                                </div>
                                </div>
                                

                                <div className="p-4 max-[300px]:hidden">
                                    <h1 className="font-bold text-sm md:text-xl">{proj.title}</h1>
                                    <ul className="text-sm text-gray-500 flex gap-4 py-1">
                                        {proj.stack.map(tech => (
                                            <li>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;