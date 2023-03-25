import Link from "next/link";
import Image from "next/image";
import pokedex from "@/public/assets/pokedex.png"

const PokedexPage = () => {
    return ( 
        <div className=" w-full py-20 h-screen">
            <div className="h-full">
                <div className="w-full h-1/2 relative">
                    <Image src={pokedex} className="h-full object-contain lg:object-contain w-full rounded-lg" alt="Pokedex Project image"/>
                    <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity rounded-lg"></div>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    <header className="flex flex-col gap-4 h-1/3">
                        <h1 className="font-semibold text-lg">React Pokedex</h1>
                        <h1 className="font-bold text-3xl">Overview</h1>
                    </header>

                    <div className="text-gray-500 text-sm md:text-lg">
                        <p>
                        The React Pokemon Pokedex is a comprehensive app that provides users with access to every single Pokemon 
                        from all generations, ranging from the first to the latest one. The app utilizes the PokéAPI to fetch 
                        information about each Pokemon, including its index number, name, and picture, and displays them in a user-friendly
                        manner. With this app, users can browse through a massive collection of Pokemon and learn about their 
                        characteristics and traits making it an excellent resource for anyone interested in the Pokemon universe. The app's 
                        intuitive design and responsive interface make it easy to navigate, allowing users to enjoy an immersive experience
                        as they explore the vast world of Pokemon. Whether you're a hardcore fan or just starting, the React Pokemon 
                        Pokedex is a must-have tool for all Pokemon enthusiasts.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://github.com/oscar72324/react_pokedex" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Code
                        </Link>

                        <Link href="https://oscar72324.github.io/react_pokedex/" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Demo
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-8">
                        <h1 className="text-lg font-semibold">
                            Tech Stack:
                        </h1>
                        <ul className="text-sm max-[250px]:flex-col text-white flex gap-4 items-center font-semibold">
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                ReactJs
                            </li>
                            <li className="bg-gray-500 rounded-lg py-1 px-2">
                                CSS
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default PokedexPage;