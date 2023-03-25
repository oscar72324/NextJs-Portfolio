import Link from "next/link";
import Image from "next/image";
import portfolio from "@/public/assets/PortfolioPic.png"

const PortfolioPage = () => {
    return ( 
        <div className=" w-full py-20 h-screen">
            <div className="h-full">
                <div className="w-full h-1/2 relative">
                    <Image src={portfolio} className="h-full object-fill lg:object-cover w-full rounded-lg" alt="Picture of Personal Portfolio Project"/>
                    <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity rounded-lg"></div>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    <header className="flex flex-col gap-4 h-1/3">
                        <h1 className="font-semibold text-lg">Personal Portfolio</h1>
                        <h1 className="font-bold text-3xl">Overview</h1>
                    </header>

                    <div className="text-gray-500 text-sm md:text-lg">
                        <p>
                        My personal project is a portfolio website that I created using Next.js and Tailwind. The website showcases my skills,
                        work experience, and projects, as well as dedicated pages for each project with a brief description of each. With its clean and 
                        minimalist design, the website provides a comprehensive overview of my professional experience and expertise, making it easy 
                        for potential employers or clients to get a sense of my capabilities. The dedicated project pages allow visitors to delve deeper 
                        into each project, exploring the technologies used, the challenges faced, a demo and code link, and the solutions implemented. Overall, 
                        my portfolio website is an excellent tool for showcasing my skills and experience and establishing my professional brand online.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://github.com/oscar72324/Clash_App" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Code
                        </Link>

                        <Link href="/" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Demo
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-8">
                        <h1 className="text-lg font-semibold">
                            Tech Stack:
                        </h1>
                        <ul className="text-sm max-[250px]:flex-col text-white flex gap-4 items-center font-semibold">
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                NextJs
                            </li>
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                Tailwind
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default PortfolioPage;