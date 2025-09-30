import Lottie from 'lottie-react'
import animation from '../public/Image/Animation - 1751276887432 (2).json'
import pic1 from '../public/Image/icons8-facebook-logo-96.png'
import pic2 from '../public/Image/icons8-github-logo-96.png'
import pic3 from '../public/Image/icons8-linkedin-logo-96.png'
import pic4 from '../public/Image/icons8-whatsapp-logo-96.png'
import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
const Banner = () => {
    return (
        <div id="nav" className="sm:grid sm:grid-cols-2  items-center  md:px-0 lg:px-12">
            <div className="pt-12 px-3 sm:px-0">

                <motion.div
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <h2 className="text-3xl font-bold my-1 sm:my-5 sm:pl-12  bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">I am Fahim Uddin</h2>
                    <p className="text-xl font-bold my-1 sm:my-5 sm:pl-12 text-gray-300">MERN Steak Web Developer</p>
                </motion.div>
                <motion.p
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm font-bold text-gray-500 my-1 sm:my-5 sm:pl-12 ">I am a MERN Steak web developer. Also has some idea about the backend. Experienced in working with HTML,CSS,javascript,tailwind css,react,firebase,express js,node js,mongodb. Willing to work on something more advanced in the future.
                </motion.p>
                <motion.div
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <ul className="flex  gap-4 my-1 sm:my-2 sm:pl-12  items-center">
                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                            transition={{ duration: 0.5 }}
                        >
                            <a title="Facebook" className='text-4xl' href="https://www.facebook.com/fahim.moon.98">
                                <img className='w-12 h-12' src={pic1} alt="" />
                            </a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                            transition={{ duration: 0.8 }}
                        >
                            <a title="GitHub" className='text-4xl' href="https://github.com/fahimuddinmoon">
                                <img className='w-12 h-12' src={pic2} alt="" />
                            </a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                            transition={{ duration: 0.8 }}
                        >
                            <a title="Linkedin" className='text-4xl' href="https://www.linkedin.com/in/fahim-uddin-286273350/">
                                <img className='w-12 h-12' src={pic3} alt="" />
                            </a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                            transition={{ duration: 0.8 }}
                        >
                            <a title="whatsapp" className='text-4xl' href="https://wa.me/8801864466864">
                                <img className='w-12 h-12' src={pic4} alt="" />
                            </a>
                        </motion.li>



                    </ul>


                </motion.div>
            </div>
            <motion.div
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <Lottie className='lg:w-[500px] lg:h-[500px] hover:opacity-100 transition duration-1000 lg:ml-48 z-10 opacity-60' animationData={animation}></Lottie>
            </motion.div>
        </div>
    );
};

export default Banner;