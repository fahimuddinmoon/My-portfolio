import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animation from '../dist/assets/Animation - 1751366351891.json'
const Education = () => {
    return (
        <div className='my-14 mx-3 md:mx-11 lg:mx-20'>
            <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent  mb-7">My Educational Qualification</h2>
            <div className="lg:flex justify-around items-center">
                <div >
                    <Lottie className='lg:w-[400px] lg:h-[400px] hover:opacity-100 transition duration-1500 mx-12  l:mx-0 sm:ml-6 z-10 opacity-40 ' animationData={animation}></Lottie>
                </div>
                <motion.div className='rounded-4xl bg-gradient-to-l from-gray-900   to-transparent  p-7 text-center'>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Degree</h3>
                        <p className='text-sm font-bold text-gray-600'>Bachelor of Arts in Philosophy</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Institution</h3>
                        <p className='text-sm font-bold text-gray-600'>Haji Muhammad Mohsin College,Chittagong</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Session Year/Duration</h3>
                        <p className='text-sm font-bold text-gray-600'>2020-2026</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Current Status</h3>
                        <p className='text-sm font-bold text-gray-600'>Currently in 4th Year</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Previous Degrees</h3>
                        <p className='text-sm font-bold text-gray-600'>HSC in Humanities - 2020</p>
                        <p className='text-sm font-bold text-gray-600'>SSC in Humanities - 2018</p>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>Others Certifications</h3>
                        <p className='text-sm font-bold text-gray-600'>Completed Web Development Level - 1 Course from Programming Hero(2024)</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;