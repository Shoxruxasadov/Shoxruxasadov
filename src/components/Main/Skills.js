import React from 'react'
import { SiNextdotjs, SiFoodpanda, SiReactquery, SiFirebase, SiFramer, SiNestjs, SiSocketdotio, SiAxios, SiSass, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiStyledcomponents, SiReact, SiRedux, SiGit, SiBootstrap, SiCss3, SiJavascript, SiTypescript, SiDocker, SiPostgresql, SiPrisma, SiVercel, SiReduxsaga, SiHtml5, SiMui, SiMobx, SiGithub, SiJsonwebtokens, SiSupabase, SiStripe } from "react-icons/si";

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
            name: "TypeScript",
            icon: <SiTypescript />
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />
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
            name: "Vercel",
            icon: <SiVercel />
        },
        {
            name: "GitHub",
            icon: <SiGithub />
        },
        {
            name: "Git",
            icon: <SiGit />
        },
        {
            name: "Axios",
            icon: <SiAxios />
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
        
    ]
    const backend = [
        {
            name: "NestJS",
            icon: <SiNestjs />
        },
        {
            name: "NodeJS",
            icon: <SiNodedotjs />
        },
        {
            name: "ExpressJS",
            icon: <SiExpress />
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
            name: "Docker",
            icon: <SiDocker />
        },
        {
            name: "JWT",
            icon: <SiJsonwebtokens />
        },
        {
            name: "Firebase",
            icon: <SiFirebase />
        },
        {
            name: "Supabase",
            icon: <SiSupabase />
        },
        {
            name: "Stripe",
            icon: <SiStripe />
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
