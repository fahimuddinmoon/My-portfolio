import pic1 from '../public/Image/Design thinking-rafiki.png'
import pic2 from '../public/Image/Investment data-rafiki.png'
import pic3 from '../public/./Image/Critical thinking-rafiki.png'
import pic4 from '../public/Image/Performance overview-rafiki.png'
import pic5 from '../public/Image/Responsive-amico.png'
import pic6 from '../public/Image/Code review-bro.png'
import { motion } from 'framer-motion';
const WorkProcess = () => {
    return (
        <div className='pb-10 px-3  md:px-12 lg:px-20'>
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>My Quality Service</motion.h2>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='rounded-4xl bg-gradient-to-r from-gray-800   to-transparent hover:bg-gray-800 transition duration-800 p-7 text-center '>
                    <img className=' w-44 h-44 mx-auto' src={pic1} alt="" />
                    <h3 className='text-xl font-bold text-white'>Design-First</h3>
                    <p className='text-sm font-bold text-gray-400'>I take a design-first approach in web app development. It’s not just about functionality — aesthetic and user experience are equally important.</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='rounded-4xl bg-gradient-to-r from-gray-800   to-transparent hover:bg-gray-800 transition duration-800 p-7 text-center'>
                    <img className=' w-44 h-44 mx-auto ' src={pic4} alt="" />
                    <h3 className='text-xl font-bold text-white'>Performance Focused</h3>
                    <p className='text-sm font-bold text-gray-400'>I prioritize speed and optimization. Your website won’t just look good — it’ll load fast and perform flawlessly.</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='rounded-4xl bg-gradient-to-r from-gray-800   to-transparent hover:bg-gray-800 transition duration-800 p-7 text-center'>
                    <img className=' w-44 h-44 mx-auto' src={pic5} alt="" />
                    <h3 className='text-xl font-bold text-white'>Responsive Design</h3>
                    <p className='text-sm font-bold text-gray-400'>No matter the device — desktop, tablet, or mobile — I ensure your app looks and feels great on all screen sizes.</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='rounded-4xl bg-gradient-to-r from-gray-800   to-transparent hover:bg-gray-800 transition duration-800 p-7 text-center'>
                    <img className=' w-44 h-44 mx-auto' src={pic2} alt="" />
                    <h3 className='text-xl font-bold text-white'>Business-Minded</h3>
                    <p className='text-sm font-bold text-gray-400'>I always consider your business goals. From KPIs to ROI, I build web apps that make business sense and drive value.</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='rounded-4xl bg-gradient-to-r from-gray-800   to-transparent hover:bg-gray-800 transition duration-800 p-7 text-center'>
                    <img className=' w-44 h-44 mx-auto' src={pic6} alt="" />
                    <h3 className='text-xl font-bold text-white'>Scalable Codebase</h3>
                    <p className='text-sm font-bold text-gray-400'>I write clean, modular, and scalable code so your project can grow without performance issues or tech debt.</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='rounded-4xl bg-gradient-to-r from-gray-800   to-transparent hover:bg-gray-800 transition duration-800 p-7 text-center'>
                    <img className=' w-44 h-44 mx-auto' src={pic3} alt="" />
                    <h3 className='text-xl font-bold text-white'>Idea into Reality</h3>
                    <p className='text-sm font-bold text-gray-400'>Got an idea? I’ll help you turn that concept into a fully working product — from wireframing to MVP to full deployment.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkProcess;