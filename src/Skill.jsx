import { motion } from 'framer-motion';
import pic from '../public/Image/icons8-html-5-96.png'
import pic2 from '../public/Image/icons8-css-96.png'
import pic3 from '../public/Image/icons8-tailwindcss-96.png'
import pic4 from '../public/Image/icons8-javascript-96.png'
import pic5 from '../public/Image/icons8-react-200.png'
import pic6 from '../public/Image/icons8-node-js-96.png'
import pic7 from '../public/Image/icons8-mongo-db-96.png'
import pic8 from '../public/Image/icons8-firebase-96.png'
import pic9 from '../public/Image/icons8-express-js-96.png'
import pic10 from '../public/Image/icons8-jwt-96.png'
import pic11 from '../public/Image/icons8-redux-96.png'
import 'animate.css';
const Skill = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900  to-transparent mx-3 md:mx-11 lg:mx-20 rounded-4xl py-14 '>
            <h3 className="text-3xl font-extrabold text-center mb-7 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">Skills That Drive Success</h3>
            <div className="">
                <ul className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 items-center h-full">
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img title="HTML " className="hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " src={pic} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>HTML</p>
                    </motion.div>

                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="CSS" src={pic2} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>CSS</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="TailwindCSS" src={pic3} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Tailwind CSS</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="Javascript" src={pic4} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Javascript</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="React" src={pic5} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>React.js</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="NodeJS" src={pic6} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Node.js</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="MongoDB" src={pic7} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>MongoDB</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="MongoDB" src={pic8} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Firebase</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24  border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="MongoDB" src={pic9} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Express.js</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="MongoDB" src={pic10} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>JWT</p>
                    </motion.div>
                    <motion.div className='h-full'
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    ><img className=" hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent transition-all  mx-auto bg-gray-900  w-24 border-4  rounded-2xl  p-4 border-animated-skill h-24 " title="MongoDB" src={pic11} alt="" />
                        <p className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Redux</p>
                    </motion.div>
                </ul>
            </div>
        </div>
    );
};

export default Skill;