
'use client'

import Image from 'next/image';
import "./header.css";

const Header: React.FC = () => {

    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
            <header>
                <div className="logo-container">
                    <div className="logo">
                        <Image
                            src="/icon-sa.svg"
                            alt="SA-icon"
                            width={50}
                            height={50}
                            className='sa-icon'
                        />
                        
                    </div>
                    <div className="dropdown-menu">
                        <ul>
                            <li><a onClick={()=>scrollToSection('home')}>Home</a></li>
                            <li><a onClick={()=>scrollToSection('about')}>About</a></li>
                            <li><a onClick={()=>scrollToSection('skills')}>Skills</a></li>
                            <li><a onClick={()=>scrollToSection('production')}>Production</a></li>
                        </ul>
                    </div>
                </div>
                <h1 className='pname'>SnowArrow</h1>
            </header>
        </>


    );
};

export default Header;
