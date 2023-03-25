import Link from "next/link";
import Image from "next/image";
import greeting from "@/public/assets/Greeting.png"

const GreetingsPage = () => {
    return ( 
        <div className=" w-full py-20 h-screen">
            <div className="h-full">
                <div className="w-full h-1/2 relative">
                    <Image src={greeting} className="h-full object-fill lg:object-cover w-full rounded-lg" alt="Picture of greetings app project"/>
                    <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity rounded-lg"></div>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    <header className="flex flex-col gap-4 h-1/3">
                        <h1 className="font-semibold text-lg">Greetings App</h1>
                        <h1 className="font-bold text-3xl">Overview</h1>
                    </header>

                    <div className="text-gray-500 text-sm md:text-lg">
                        <p>
                        The Greetings App is a fun and engaging tool that helps users start their day with motivation and positivity. 
                        With its playful Pokemon theme, the app allows users to input their name and daily goal or focus, which is saved 
                        in their local storage and resets every day. One of the standout features of this app is its ability to change 
                        the background based on the time of day, providing users with a visual reminder of the passing time. The app is 
                        built using HTML, CSS, and JavaScript, making it accessible and easy to use. Whether you're a fan of Pokemon or 
                        just looking for a fun way to start your day, the Greetings App is a great choice.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://github.com/oscar72324/Greeting-App" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Code
                        </Link>

                        <Link href="https://greeting-app-one.vercel.app/" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Demo
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-8">
                        <h1 className="text-lg font-semibold">
                            Tech Stack:
                        </h1>
                        <ul className="text-sm max-[250px]:flex-col text-white flex gap-4 items-center font-semibold">
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                HTML
                            </li>
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                CSS
                            </li>
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                JS
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
     );
    }
 
export default GreetingsPage;