import React, { useEffect, useState } from 'react'
import Background from '../background/Background';

export default function Hero() {
    const [name, setName] = useState('');
    const fullName = 'Sriman Kumar';
    const typingSpeed = 200;

    useEffect(() => {
        let charIndex = 0, limit = fullName.length + 1;

        const typingInterval = setInterval(() => {
            if (charIndex < limit) {
                setName(fullName.substring(0, charIndex));
                charIndex = (charIndex + 1) % limit;
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval)

    }, [])


    return (
        <div className=' max-w-screen h-auto'>
            <Background className="-z-50" />
            <div className={`relative z-10 justify-center flex flex-col sm:flex-row items-center gap-[1rem] md:gap-[0rem] pt-10 sm:pt-3 pb-16 md:pt-12 md:pb-17 text-white overflow-hidden h-auto`} >
                <div className=' absolute w-[100vw] sm:relative sm:w-[45%] blur-sm sm:blur-none'>
                    <img
                        className={`w-[100%] sm:w-[90%] object-fill`}
                        src="/hero.png"
                        alt="hero-img" />
                </div>
                <div className=' flex flex-col gap-2 2xl:gap-4 w-[90%] sm:w-[45%] pb-12 z-10 '>
                    <div className={`text-3xl 2xl:text-5xl font-semibold flex items-center mb-3 `}>Hello <span className='flex mb-[10px]'>
                        <span className='hand-emoji '>👋</span>
                    </span></div>
                    <div className={`text-3xl sm:text-3xl lg:text-5xl 2xl:text-6xl  font-extrabold`}>I'm <span className=' text-yellow-500'>{name}</span></div>
                    <div className={`text-2xl sm:text-2xl lg:text-4xl font-bold text-[#DCCFED]`}>A FrontEnd Developer</div>
                    <div className={`md:text-xl text-2xl font-semibold mt-2`}>Build things for Web</div>
                    <div className='flex justify-start'>
                        <div className=' bg-yellow-500 px-4 py-1 font-semibold text-black rounded-2xl mt-1'>
                            <a href="/resume.pdf" download={'Resume_Sriman.pdf'}>Get Resume</a>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block absolute z-1000  -bottom-3 w-[110%] h-auto'>
                    <img className='w-full' src='/wave.png' alt='' />
                </div>
            </div>
        </div>
    )
}
