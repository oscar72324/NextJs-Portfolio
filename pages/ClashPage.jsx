import Image from "next/image";
import clash from "@/public/assets/ClashPic.png"
import Link from "next/link";

const ClashPage = () => {
    return ( 
        <div className=" w-full py-20 h-screen">
            <div className="h-full">
                <div className="w-full h-1/2 relative">
                    <Image src={clash} className="h-full object-fill lg:object-cover w-full rounded-lg" alt="Picture of Clash Royale App"/>
                    <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity rounded-lg"></div>
                </div>

                <div className="flex flex-col gap-4 p-4">
                    <header className="flex flex-col gap-4 h-1/3">
                        <h1 className="font-semibold text-lg">Clash Royale App</h1>
                        <h1 className="font-bold text-3xl">Overview</h1>
                    </header>

                    <div className="text-gray-500 text-sm md:text-lg">
                        <p>
                            This clash royale app ingests the official Clash Royale API where the user can search their real player tag, 
                            clan, clan members, and more. Not only can you search for players and clans, you can also check the official 
                            global ranking in North America, as well as the cards available in the game with a brief descriptive description
                            of each one. Finally, you can check upcoming challenges in the game, the included prizes, losses and wins necessary,
                            and more. <span className="font-semibold text-gray-700">(Unfortunately due to the API being bound to my IP Address, I was unable to host the application which
                            means I cannot provide a demo).</span>
                        </p>
                    </div>

                    <div>
                        <Link href="https://github.com/oscar72324/Clash_App" className="bg-sky-700 hover:bg-sky-900 py-1 px-4 rounded-xl text-white font-semibold">
                            Code
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-8">
                        <h1 className="text-lg font-semibold">
                            Tech Stack:
                        </h1>
                        <ul className="text-sm  text-white flex gap-4 items-center font-semibold">
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
 
export default ClashPage;