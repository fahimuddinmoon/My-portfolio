import pic from '../public/Image/IMG_3280.jpg'
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <div id="nav" className="sm:grid sm:grid-cols-2  items-center">
            <div className="pt-12">
                <a href="https://git.io/typing-svg">
                    <img className="my-8 sm:pl-8" src="https://readme-typing-svg.herokuapp.com/?lines=Hello+👋i+am+Fahim....;Welcome+to+you!&center=true&size=30" alt="" />
                </a>
                <h2 className="text-3xl font-bold my-1 sm:my-2 sm:pl-12 p-4">Fahim Uddin Moon</h2>
                <p className="text-xl font-bold my-1 sm:my-2 sm:pl-12 p-4">Frontend Web Developer</p>
                <p className="text-sm font-bold text-gray-600 my-1 sm:my-2 sm:pl-12 p-4">I am a frontend web developer. Also has some idea about the backend. Experienced in working with HTML,CSS,javascript,tailwind css,react,firebase,express js,node js,mongodb. Willing to work on something more advanced in the future.</p>
                <div>
                    <ul className="flex  gap-4 my-1 sm:my-2 sm:pl-12 p-4 items-center">
                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                        >
                            <a title="Facebook" className='text-4xl' href="https://www.facebook.com/fahim.moon.98"><BsFacebook /></a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                        >
                            <a title="GitHub" className='text-4xl' href="https://github.com/fahimuddinmoon"><FaGithub /></a>
                        </motion.li>


                        <motion.li
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ textAlign: 'center' }}
                        ><a title="Download" className='text-4xl' href=""><IoCloudDownloadOutline /></a>
                        </motion.li>
                    </ul>


                </div>
            </div>
            <div>
                <img className="w-72  h-72 mx-auto sm:my-12 border-4 border-blue-600 rounded-full object-cover" src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;