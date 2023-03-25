import css from "@/public/assets/css.png"
import html from "@/public/assets/html.png"
import javascript from "@/public/assets/javascript.png"
import mysql from "@/public/assets/mysql.png"
import nextjs from "@/public/assets/nextjs.png"
import react from "@/public/assets/react.png"
import tailwind from "@/public/assets/tailwind.png"
import Image from "next/image"
import node from "@/public/assets/node.png"

const Skills = () => {
    const skillset = [
        {
            title: 'HTML',
            image: html,
        },
        {
            title: 'CSS',
            image: css,
        },
        {
            title: 'JavaScript',
            image: javascript,
        },
        {
            title: 'React',
            image: react,
        },
        {
            title: 'NextJS',
            image: nextjs,
        },
        {
            title: 'Tailwind',
            image: tailwind,
        },
        {
            title: 'MySQL',
            image: mysql,
        },
        {
            title: 'NodeJs',
            image: node,
        },

    ]

    return ( 
        <div id="skills" className="w-full h-screen">
            <div className="max-[] w-full h-full flex flex-col mx-auto items-center justify-center max-[450px]:p-2 p-12 lg:p-24">
                <header className="w-full text-left py-8">
                    <h1 className="text-gray-400 text-lg md:text-2xl py-4">// Skills</h1>
                    <h1 className="font-bold text-2xl md:text-5xl  py-4">Skillset</h1>
                </header>

                <div>
                    <ul className=" grid  gap-8 grid-cols-2 md:grid-cols-4 w-full">
                        {skillset.map(skill => (
                            <li key={skill.title} className="max-[300px]:flex-col shadow-lg border rounded-xl p-4 flex items-center justify-between">
                                <Image className="w-1/3" src={skill.image} alt="image of skill" width="500" height="100"/>
                                <p className="text-sm lg:text-xl font-bold">{skill.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;