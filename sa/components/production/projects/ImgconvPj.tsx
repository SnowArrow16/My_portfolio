'use client'

import React, { useState } from 'react'
import "./projects.css"
import FadeInSection from '@/components/fadeInSection/fadeInSection'

const ImgconvPj = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <div className='pj'>
                    <img className='pj-icon' src={"/img_conv.png"} />
                    <p className='pj-name'>画像変換名人</p>
                </div>
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <FadeInSection duration={0.5}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>{/* クリックしても閉じないようにする */}
                            <div className='head'>
                                <h1 id='title'>画像変換名人</h1>
                                <button onClick={() => setIsOpen(false)} id='close'>×</button>
                            </div>
                            <div className='in'>
                                <div>
                                    <p id='pj-about'>
                                        画像を様々な方法で変換できるGUIアプリです。モザイク処理からガウシアンフィルタなど数種類の変換方法が選べます。
                                        変換した画像はユーザーごとに履歴を残すことができ、ダウロードもできます。
                                    </p>
                                    <nav className='url'>
                                        <ul>
                                            <li id='down'>
                                                Github-link :
                                                <a href='https://github.com/2024AIT-OOP2-G12/img_conv' target="_blank" rel="noopener noreferrer" id='pj-link'>
                                                https://github.com/2024AIT-OOP2-G12/img_conv
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <img id='demo' src={"/img_conv.png"} />
                                {/*　ここにデモ動画　OR 写真を貼る */}
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            )}
        </>
    )
}

export default ImgconvPj