import React from 'react'
import {
    ImgconvPj,
    AkariPj
} from './projects'
import "./production.css"
import FadeInSection from '../fadeInSection/fadeInSection'
const Production = () => {

    const project_list: { component: React.FC; name: string }[] = [
        { component: ImgconvPj, name: "Image_Conv" },
        { component: AkariPj, name: "akari_show_face" },
    ]

    return (
        <>
            <section id="production" className='protection_dis'>
                <FadeInSection>
                <div className='protection_contents'>
                    <h1 className='protection_title'>Protection</h1>
                    <div className='protection'>
                        {project_list.map(({ component: Component, name }, index) => (
                            <div className='production_list' key={index} title={name}>
                                <Component />
                            </div>
                        ))}
                    </div>
                </div>
                </FadeInSection>
            </section>
        </>
    )
}

export default Production