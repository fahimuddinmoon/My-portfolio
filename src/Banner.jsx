import animation from '../dist/lottie/Animation - 1751276887432 (1).json'

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
const Banner = () => {
    return (
        <div id="nav" className="sm:grid sm:grid-cols-2  items-center px-4 sm:px-12">
            <div className="pt-12">

                <motion.div
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <h2 className="text-3xl font-bold my-1 sm:my-2 sm:pl-12 p-2 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">I am Fahim Uddin</h2>
                    <p className="text-xl font-bold my-1 sm:my-2 sm:pl-12 p-2 text-gray-500">MERN Steak Web Developer</p>
                </motion.div>
                <motion.p
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm font-bold text-gray-600 my-1 sm:my-2 sm:pl-12 p-4">I am a MERN Steak web developer. Also has some idea about the backend. Experienced in working with HTML,CSS,javascript,tailwind css,react,firebase,express js,node js,mongodb. Willing to work on something more advanced in the future.
                </motion.p>
                <motion.div
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <ul className="flex  gap-4 my-1 sm:my-2 sm:pl-12 p-4 items-center">
                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                        >
                            <a title="Facebook" className='text-4xl' href="https://www.facebook.com/fahim.moon.98"></a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                        >
                            <a title="GitHub" className='text-4xl' href="https://github.com/fahimuddinmoon"></a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                        ><a title="Download" className='text-4xl' href=""></a>
                        </motion.li>
                    </ul>


                </motion.div>
            </div>
            <div>
                <Lottie className='w-[500px] h-[500px] ml-48 z-10 opacity-40' animationData={animation}></Lottie>
            </div>
        </div>
    );
};

export default Banner;