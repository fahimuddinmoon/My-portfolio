import pic from '../public/Image/icons8-portfolio-96.png'
import 'animate.css';
import { motion } from 'framer-motion';
const Navber = () => {
    return (
        <div className="navbar fixed backdrop-brightness-100 backdrop-blur-3xl z-40  md:px-11 lg:px-20 ">
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" text-blue-500  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content border-animated rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className='text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent' href="#nav">Home</a></li>
                        <li><a className='text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent' href="#aboutMe">About Me</a></li>
                        <li><a className='text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent' href="#contact">Contact Me</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <img className='w-11 h-11 object-cover rounded-full' src={pic} alt="" />
                    <a className=" text-3xl font-extrabold m-0 p-0 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent"> <i>Fahim</i></a>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent' href="#nav">Home</a></li>
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent' href="#aboutMe">About Me</a></li>
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent' href="#contact">Contact Me</a></li>
                    <li> <a href="" download className="animate__heartBeat  text-sm font-bold border-2 border-blue-400 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">Resume</a></li>

                </ul>
            </motion.div>

        </div>
    );
};

export default Navber;