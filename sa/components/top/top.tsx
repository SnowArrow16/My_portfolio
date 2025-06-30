'use client'

import React from 'react'
import "./top.css"
import FadeInSection from '../fadeInSection/fadeInSection'
import Image from 'next/image'

const Top = () => {

    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
            <section id="home" className='dis'>
                <div className='title'>
                    <FadeInSection>
                        <h1 id='title'>SnowArrow</h1>
                    </FadeInSection>
                    <Image
                            src="/under.svg"
                            alt="SA-under-icon"
                            width={50}
                            height={50}
                            className='sa-under-icon'
                            onClick={()=>scrollToSection('about')}
                        />
                </div>
                
            </section>
        </>
    )
}

export default Top