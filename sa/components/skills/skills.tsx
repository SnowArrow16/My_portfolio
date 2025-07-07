import React from 'react'
import "./skills.css"
import FadeInSection from '../fadeInSection/fadeInSection'
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiC,
    SiCplusplus,
    SiGithub,
    SiBlender,
    SiPython,
} from "@icons-pack/react-simple-icons"


// 表示したいアイコンと名前を配列にまとめる
const skillIcons = [
    { icon: SiHtml5, name: 'HTML', color: "#E34F26" },
    { icon: SiCss, name: 'CSS', color: "#1572B6" },
    { icon: SiJavascript, name: 'JavaScript', color: "#F7DF1E" },
    { icon: SiTypescript, name: 'TypeScript', color: "#3178C6" },
    { icon: SiReact, name: 'React', color: "#61DAFB" },
    { icon: SiNextdotjs, name: 'Next.js', color: "#000000" },
    { icon: SiC, name: 'C', color: "#A8B9CC" },
    { icon: SiCplusplus, name: 'C++', color: "#00599C" },
    { icon: SiPython, name: 'Python', color: "#3776AB" },
    { icon: SiGithub, name: 'GitHub', color: "#181717" },
    { icon: SiBlender, name: 'Blender', color: "#F5792A" },
    
]


const Skills = () => {
    return (
        <>
            <section id="skills" className='skill-dis'>
                <div>
                    <FadeInSection delay={0.3}>
                        <div className='skill-contents'>
                            <h1 className='skill-title'>Skills</h1>
                            <div className='skill-list'>
                                {skillIcons.map(({ icon: Icon, name, color}, index) => (
                                    <div className="skill-item" key={index} title={name}>
                                        <Icon className="skill-icon" color={color}/>
                                        <p>{name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </>
    )
}

export default Skills