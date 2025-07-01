import pic from '../public/Image/PXL_20240927_152926112.PORTRAIT.jpg'
import { motion } from 'framer-motion';
const AboutMe = () => {
    return (
        <div id="aboutMe" className=' pb-20  md:px-4 lg:px-14'>
            <motion.h2
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-extrabold text-center mb-7 p-11 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">Bringing Designs To Life  With <br className='sm' />Code & Creativity</motion.h2>
            <div className="lg:grid grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-3'>
                    <div className='bg-transparent sm:px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li>💻<span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent '> Professional Summary</span></li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> I am a Frontend Web Developer with expertise in HTML, CSS, JavaScript, Tailwind CSS, and React.js, building responsive and interactive web applications. I specialize in modern UI development, ensuring a seamless user experience. I have experience with API integration and Firebase Authentication and a basic understanding of Node.js, Express.js, and MongoDB.</p>
                    </div>
                    <div className='bg-transparent sm:px-4 py-1 m-3 rounded-xl mt-auto'>

                        <li>🚀<span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent ' >Personal Journey & Skills</span></li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'>Besides studying, becoming a developer is an important part of my achievement. As a frontend developer I can create frontend using Html , CSS , JavaScript , react , tailwind CSS and also have basic understanding of firebase authentication node.js , express.js , MongoDB .</p>
                    </div>
                    <div className='bg-transparent sm:px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li>🎯 <span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent '>Passion & Goal</span></li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> Inventing new things, finding solutions to complex programming related problems, improving user experience with one's own skills, etc. are part of the passion of a developer.My goal as a developer is to develop myself as a skilled full-stack developer. Become familiar and proficient with new technologies. Finding solutions to programming related problems.
                        </p>
                    </div>
                    <div className='bg-transparent sm:px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li>💡<span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent '>How I can help</span></li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> I can build responsive, user-friendly, and visually appealing web interfaces that enhance user experience.I also ensure collaborate with designers and backend developers to create seamless, dynamic interfaces that improve customer satisfaction.</p>
                    </div>
                    <div className='bg-transparent sm:px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li>🎮<span className='text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent '>Outside of coding</span></li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> Outside of coding, I enjoy traveling, playing games, and organizing my surroundings. I truly believe that learning never stops — and I’m here for the journey.</p>
                    </div>
                </motion.div>
                <div>
                    <motion.img

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
                        className="w-[350px]   h-[450px] shadow-2xl shadow-black mx-auto sm:my-12 border-4 border-black  object-cover rounded-full" src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;