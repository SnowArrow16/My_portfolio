import React from 'react'
import FadeInSection from '@/components/fadeInSection/fadeInSection'
import "./about.css"

const About = () => {
  return (
    <>
      <section id="about" className='about-dis'>
        <div>
          <FadeInSection delay={0.3}>
            <div className='about-contents'>
              <h1 className='about-title'>About</h1>
              <div className='about'>
                <img src={"/totto.png"} className='profile-img'></img>
                <div>
                  <h1 id='name'>SnowArrow</h1>
                  <p>
                    岐阜県出身、愛知県内の大学に在学しています。
                    岐阜県の商業高校を卒業後、愛知県の工業大学へ進学し、主にプログラミングやコンピュータについて学んでいます。
                    趣味は音楽（主にMrs. GREEN APPLE）を聴くことと、ちょっとした筋トレです。
                    将来は、IT技術を使って、身障者が健常者と同じような生活ができるように支援するシステムや機器の制作に携わりたいと考えています。
                    そのため、現在は知的制御研究室に配属しており、オープンソースロボットを使ったアプリ開発などをしています。
                  </p>
                  <nav className='url'>
                    <ul>
                      <li>
                        ・Github:<a href='https://github.com/SnowArrow16' target="_blank" rel="noopener noreferrer" className='link'>https://github.com/SnowArrow16</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}

export default About