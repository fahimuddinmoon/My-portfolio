
import { motion } from 'framer-motion';
import animation from '../public/Image/Animation - 1751548041431 (1).json'
import Lottie from 'lottie-react';
const Education = () => {
    return (
        <div className='my-14 mx-3 md:mx-11 lg:mx-20 bg-gradient-to-l from-[#262626]   to-transparent rounded-3xl pb-4'>
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent pt-12 mb-4">My Educational Qualification</motion.h2>
            <div className="lg:flex justify-around items-center">
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <Lottie className='lg:w-[480px] lg:h-[480px] hover:opacity-100 transition duration-1000 mx-12  l:mx-0 sm:ml-6 z-10 opacity-80 ' animationData={animation}></Lottie>
                </motion.div>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='rounded-4xl   p-7 text-center'>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Degree</h3>
                        <p className='text-sm font-bold text-gray-300'>Bachelor of Arts in Philosophy</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Institution</h3>
                        <p className='text-sm font-bold text-gray-300'>Haji Muhammad Mohsin College,Chittagong</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Session Year/Duration</h3>
                        <p className='text-sm font-bold text-gray-300'>2020-2026</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Current Status</h3>
                        <p className='text-sm font-bold text-gray-300'>Currently in 4th Year</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Previous Degrees</h3>
                        <p className='text-sm font-bold text-gray-300'>HSC in Humanities - 2020</p>
                        <p className='text-sm font-bold text-gray-300'>SSC in Humanities - 2018</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Others Certifications</h3>
                        <p className='text-sm font-bold text-gray-300'>Completed Web Development Level - 1 Course from Programming Hero(2024)</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;