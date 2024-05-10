import React from 'react'
import { SiNextdotjs, SiFoodpanda, SiReactquery, SiFirebase, SiFramer, SiNestjs, SiSocketdotio, SiAxios, SiSass, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiStyledcomponents, SiReact, SiRedux, SiGit, SiBootstrap, SiCss3, SiJavascript, SiTypescript, SiDocker, SiPostgresql, SiPrisma, SiVercel, SiReduxsaga, SiHtml5, SiMui, SiMobx, SiGithub, SiMinutemailer, SiNodemon, SiTsnode, SiJsonwebtokens } from "react-icons/si";

export default function Skills() {
    const frontend = [
        {
            name: "NextJS",
            icon: <SiNextdotjs />
        },
        {
            name: "React",
            icon: <SiReact />
        },
        {
            name: "React Query",
            icon: <SiReactquery />
        },
        {
            name: "Redux Toolkit",
            icon: <SiRedux />
        },
        {
            name: "Redux Saga",
            icon: <SiReduxsaga />
        },
        {
            name: "Zustand",
            icon: <SiFoodpanda />
        },
        {
            name: "MobX",
            icon: <SiMobx />
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />
        },
        {
            name: "HTML",
            icon: <SiHtml5 />
        },
        {
            name: "CSS",
            icon: <SiCss3 />
        },
        {
            name: "SASS",
            icon: <SiSass />
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />
        },
        {
            name: "Bootstrap",
            icon: <SiBootstrap />
        },
        {
            name: "Framer Motion",
            icon: <SiFramer />
        },
        {
            name: "Material UI",
            icon: <SiMui />
        },
        {
            name: "Style Component",
            icon: <SiStyledcomponents />
        },
        {
            name: "Firebase",
            icon: <SiFirebase />
        },
        {
            name: "Git",
            icon: <SiGit />
        },
        {
            name: "GitHub",
            icon: <SiGithub />
        }
    ]
    const backend = [
        {
            name: "NodeJS",
            icon: <SiNodedotjs />
        },
        {
            name: "ExpressJS",
            icon: <SiExpress />
        },
        {
            name: "NestJS",
            icon: <SiNestjs />
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql />
        },
        {
            name: "Prisma",
            icon: <SiPrisma />
        },
        {
            name: "SocketIo",
            icon: <SiSocketdotio />
        },
        {
            name: "Axios",
            icon: <SiAxios />
        },
        {
            name: "Vercel",
            icon: <SiVercel />
        },
        {
            name: "Docker",
            icon: <SiDocker />
        },
        {
            name: "Nodemon",
            icon: <SiNodemon />
        },
        {
            name: "NodeTS",
            icon: <SiTsnode />
        },
        {
            name: "JWT",
            icon: <SiJsonwebtokens />
        },
    ]

    return (
        <section id='skills'>
            <div className="frontend">
                <p>Frontend skills</p>
                <div className="wrapper">
                    {frontend.map((item, i) => (
                        <div className={`skill ${item.name}`} key={i}>
                            <div>{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="backend">
                <p>Backend skills</p>
                <div className="wrapper">
                    {backend.map((item, i) => (
                        <div className={`skill ${item.name}`} key={i}>
                            <div>{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
