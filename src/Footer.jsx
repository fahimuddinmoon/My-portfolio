import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import pic1 from '../public/Image/icons8-facebook-logo-96.png'
import pic2 from '../public/Image/icons8-github-logo-96.png'
import pic3 from '../public/Image/icons8-linkedin-logo-96.png'
import pic4 from '../public/Image/icons8-whatsapp-logo-96.png'
import { motion } from 'framer-motion';
const Footer = () => {
    return (
        <footer id="Contact" className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 px-3 md:px-5 lg:px-10">

            <nav className='w-11/12 mx-auto sm:flex justify-between md:gap-28 lg:gap-96 items-center'>
                <div>
                    <h6 className="footer-title text-2xl">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <div>
                            <ul className="flex  gap-4 my-1 sm:my-2  items-center">
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
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <p className="flex gap-7 items-center text-2xl font-bold text-gray-500"><MdAddIcCall /><span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent '>+880 1864 - 466864</span></p>
                    <p className="flex gap-7 items-center text-2xl font-bold text-gray-500"><MdOutlineMailOutline /><span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent '>fahimmoon103@gmail.com</span></p>
                    <p className="flex gap-7 items-center text-2xl font-bold text-gray-500"><FaLocationDot /><span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'> Chittagong , Bangladesh </span></p>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;