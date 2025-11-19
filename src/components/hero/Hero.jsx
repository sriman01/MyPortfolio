import { useEffect, useState } from 'react'
import Background from '../background/Background';
import { motion } from 'framer-motion';

export default function Hero() {
    const [name, setName] = useState('');
    const fullName = 'Sriman Kumar';
    const typingSpeed = 150;

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
            <Background className="-z-50" />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none'></div>
            
            {/* Mobile background image */}
            <div 
                className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 -z-10"
                style={{ backgroundImage: 'url(https://camo.githubusercontent.com/83e23656d82774a1b194dd827d7c759c84ae21f9d58d4eec976ae42879452501/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313233353334362f73637265656e73686f74732f333235323338352f6a6f622e676966)' }}
            ></div>
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-20 flex flex-col lg:flex-row items-center justify-between gap-12"
            >
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 text-center lg:text-left"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center lg:justify-start gap-3"
                    >
                        <span>Hello</span>
                        <motion.span
                            animate={{ rotate: [0, 14, -8, 14, -8, 0] }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="text-4xl md:text-6xl"
                        >
                            👋
                        </motion.span>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="text-3xl md:text-5xl lg:text-7xl font-extrabold"
                    >
                        I&apos;m <span className="gradient-text">{name}</span>
                        <span className="inline-block w-1 h-10 md:h-16 bg-yellow-500 ml-2 animate-pulse"></span>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
                    >
                        Full Stack Developer
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0"
                    >
                        Crafting digital experiences with clean code, modern design, and cutting-edge technology. 
                        Building scalable web applications that make a difference.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4"
                    >
                        <motion.a
                            href="/sriman-resume.pdf"
                            download={'Resume_Sriman.pdf'}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm md:text-base font-bold rounded-full overflow-hidden group glow-effect"
                        >
                            <span className="relative z-10">Download Resume</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                        
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 md:px-8 md:py-3 glass-effect border border-yellow-500/30 text-yellow-500 text-sm md:text-base font-bold rounded-full hover:bg-yellow-500/10 transition-all duration-300"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex gap-6 justify-center lg:justify-start mt-6"
                    >
                        <motion.a
                            href="https://github.com/sriman01"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-2xl hover:text-yellow-500 transition-colors"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/srimankumar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            className="w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-2xl hover:text-yellow-500 transition-colors"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/srimankumar45"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center text-2xl hover:text-yellow-500 transition-colors"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="relative w-full lg:w-1/2 flex items-center justify-center hidden lg:flex"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-yellow-500/50 rounded-full blur-3xl opacity-50"></div>
                        <img
                            className="relative w-full max-w-md lg:max-w-lg object-contain rounded-2xl"
                            src="https://camo.githubusercontent.com/83e23656d82774a1b194dd827d7c759c84ae21f9d58d4eec976ae42879452501/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313233353334362f73637265656e73686f74732f333235323338352f6a6f622e676966"
                            alt="Sriman Kumar"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-yellow-500 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}
