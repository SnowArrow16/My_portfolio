'use client'

import React, { useState } from 'react'
import "./projects.css"
import FadeInSection from '@/components/fadeInSection/fadeInSection'

const AkariPj = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <div className='pj'>
          <img className='pj-icon' src={"/akari2.jpg"} />
          <p className='pj-name'>akari_show_face</p>
        </div>
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <FadeInSection duration={0.5}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>{/* クリックしても閉じないようにする */}
              <div className='head'>
                <h1 id='title'>akari_show_face</h1>
                <button onClick={() => setIsOpen(false)} id='close'>×</button>
              </div>
              <div className='in'>
                <div>
                  <p id='pj-about'>トヨタのオープンソースであるAkari（灯）を用いたゲームアプリです。ルールは簡単で、Akariの首がランダムに動くため、
                    Akariに顔を合わせに行くだけです。失敗するまで続くため、何回でも繰り返すことができます。
                  </p>
                  <nav className='url'>
                    <ul>
                      <li id='down'>
                        Github-link : 
                        <a href='https://github.com/Akari-2025-3KK-B3/akari_show_face' target="_blank" rel="noopener noreferrer" id='pj-link'>
                          https://github.com/Akari-2025-3KK-B3/akari_show_face
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <img id='demo' src={"/akari2.jpg"} />
                {/*　ここにデモ動画　OR 写真を貼る */}
              </div>
            </div>
          </FadeInSection>
        </div>
      )}

    </>
  )
}

export default AkariPj