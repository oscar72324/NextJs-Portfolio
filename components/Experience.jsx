import { useEffect, useState } from "react";
import Link from "next/link";

const Experience = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['text-sky-900', 'text-blue-400']; 

    useEffect(() => {
        const intervalId = setInterval(() => {
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000); // Change this to the interval you want in milliseconds (e.g. 500 for half a second)
    
        return () => clearInterval(intervalId);
      }, []);

    return ( 
        <div id="experience" className="w-full h-screen">
            <div className="max-[] w-full h-full flex flex-col mx-auto items-center justify-center max-[450px]:p-2 p-12 lg:p-24">
                <header className="w-full text-left py-8">
                    <h1 className="text-gray-400 text-lg md:text-2xl py-4">// Work Experience</h1>
                    <h1 className="font-bold text-2xl md:text-5xl  py-4">Where I've Worked</h1>
                </header>

                {/* Experience */}
                <div className="py-8  flex flex-row w-full justify-between items-start">
                    {/* First Work Experience */}
                    <div className="max-[450px]:p-2 p-8 w-1/2">
                        <div className="text-4xl md:text-9xl  text-gray-400">
                            01
                        </div>
                        <h1 className="text-lg md:text-2xl py-2">
                        <span className={`${
                                    colorIndex > 0 ? colors[colorIndex - 1] : ''
                                    } ${colors[colorIndex]} transition-colors duration-500`}>
                                        <Link href={"https://www.linkedin.com/company/national-stem-honor-society/"}>
                                        NSTEM
                                        </Link>
                                </span> 
                        </h1>
                        <h1 className="font-bold text-lg md:text-3xl py-4">Web Developer Intern</h1>
                        <div className="w-2/3 text-xs md:text-base">
                            <p>
                                As a current web developer intern, I assist in maintaining and redesigning the 
                                company website as well as ensure seamless website functioning and improved SEO.                            
                            </p>
                        </div>
                    </div>

                    {/* Second Work Experience */}
                    <div className="max-[450px]:p-2 p-8 w-1/2">
                        <div className="text-4xl md:text-9xl text-gray-400">
                            02
                        </div>
                        <h1 className="text-lg md:text-2xl py-2">
                        <span className={`${
                                    colorIndex > 0 ? colors[colorIndex - 1] : ''
                                    } ${colors[colorIndex]} transition-colors duration-500`}>
                                        <Link href={"https://www.linkedin.com/in/kevin-chaja-7544565/"}>
                                        From Zero, LLC
                                        </Link>
                                </span> 
                        </h1>
                        <h1 className="font-bold md:text-3xl py-4">QA Tester</h1>
                        <div className="w-2/3 text-xs md:text-base">
                            <p>
                            Evaluated user problems and issues in software performance, 
                            perform bug regression testing and general functional method regression.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;