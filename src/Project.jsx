import { Link } from 'react-router-dom';
import pic1 from '../public/Image/Screenshot 2025-07-02 011815.png'
import pic2 from '../public/Image/Screenshot 2025-07-02 011857.png'
import pic3 from '../public/Image/Screenshot 2025-07-02 011957.png'
import pic4 from '../public/Image/Screenshot 2025-07-02 014102.png'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';
const Project = () => {
   return (
      <div id='projects' className="mx-3 md:mx-11 lg:mx-20">
         <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold text-center mb-12  bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">Some Of My Projects</motion.h3>
         <div className=" my-5  grid md:grid-cols-2 lg:grid-cols-2 gap-7 lg:mx-24 ">
            {/* project - 1 */}
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
               className=" items-center  gap-7 justify-between border-3 border-blue-400 rounded-3xl p-4 my-3 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic3} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Job Portal (Team Project)</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Backend</p>
                        <Link>
                           <button
                              onClick={() => document.getElementById('my_modal_2').showModal()}
                              className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-semibold hover:font-bold text-gray-500 hover:text-white'>Read More</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </motion.div>
            {/* project - 2 */}
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
               className=" items-center  gap-7 justify-between border-3 my-3 border-blue-400 rounded-3xl p-4 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic4} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Demo Portfolio</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Design</p>
                        <Link>
                           <button
                              onClick={() => document.getElementById('my_modal_3').showModal()}
                              className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-semibold hover:font-bold text-gray-500 hover:text-white'>Read More</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </motion.div>
            {/* project - 3 */}
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
               className=" items-center  gap-7 justify-between border-3   my-3 border-blue-400 rounded-3xl p-4 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic1} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Estate Web</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Backend</p>
                        <Link>
                           <button
                              onClick={() => document.getElementById('my_modal_4').showModal()}
                              className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-semibold hover:font-bold text-gray-500 hover:text-white'>Read More</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </motion.div>
            {/* project - 4 */}
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
               className=" items-center  gap-7 justify-between border-3 my-3 border-blue-400 rounded-3xl p-4 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic2} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Language Club</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend </p>
                        <Link>
                           <button
                              onClick={() => document.getElementById('my_modal_5').showModal()}
                              className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-semibold hover:font-bold text-gray-500 hover:text-white'>Read More</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
         {/* modal-2 */}
         <dialog id="my_modal_2" className="modal">
            <div className="modal-box backdrop-blur-3xl  bg-transparent">
               <h3 className="font-bold text-xl  text-center bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">Project : Job Portal(Team Project)</h3>
               <h3 className="font-bold text-lg text-center"> 📝 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Description</span></h3>
               <p className=" font-semibold bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent text-sm">This is a full-featured job portal website where users can log in either as a job seeker or an employer. Job seekers receive personalized job suggestions based on their skills and can apply for available jobs. Employers can post jobs, view applicants, and hire suitable candidates. An admin manages the entire platform, including verifying jobs and managing users. Additionally, the platform includes an AI-powered resume builder using Gemini AI.</p>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🚀 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Features</span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 . Authentication & Authorization </p>
                     <p>2 . Separate roles for job seekers and employers </p>
                     <p>3 . job suggestions based on user skills </p>
                     <p>4 . Browse and filter available jobs </p>
                     <p>5 . Employer dashboard to manage posted jobs </p>
                     <p>6 . View applied jobs and track application status </p>
                     <p>7 . View, select, or reject applicants </p>
                     <p>8 . Admin can verify jobs, manage reviews and users </p>
                     <p>9 . Admin Dashboard & Monitoring </p>
                     <p>10 . Integrated Gemini AI-powered resume builder </p>
                  </div>
               </div>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🔧 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Technology Used</span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 . Frontend: React.js, Tailwind CSS </p>
                     <p>2 . Backend: Node.js, Express.js </p>
                     <p>3 . Database: MongoDB </p>
                     <p>4 . Authentication & Hosting: Firebase </p>
                     <p>5 . Backend Hosting: Vercel</p>
                  </div>
               </div>
               <div className='grid grid-cols-3 gap-2 mt-2 '>
                  <p className='  py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='text-sm flex items-center text-gray-500 hover:text-white justify-center gap-1  font-semibold hover:font-bold' href="https://endgame-team-project-90b28.web.app/"><span><FaLink /></span>Live</a></p>
                  <p className='  py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://github.com/Shoriful0360/ai-job-portal-client"><span><FaGithub /></span> Client</a></p>
                  <p className='  py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://github.com/Shoriful0360/ai-job-portal-server"><span><FaGithub /></span> Server</a></p>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
         {/* modal-3 */}
         <dialog id="my_modal_3" className="modal">
            <div className="modal-box backdrop-blur-3xl  bg-transparent">
               <h3 className="font-bold text-xl  text-center bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">Project : Demo Portfolio</h3>
               <h3 className="font-bold text-lg text-center">📝 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Description</span></h3>
               <p className=" font-semibold bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent text-sm">This is a fully responsive home page designed using React and Tailwind CSS. The project focuses on modern UI/UX design principles and ensures a seamless experience across devices, including desktops and smartphones. No backend or functional interactivity (like forms, buttons, routing) is implemented in this version—it's purely a static visual layout intended for frontend UI design practice and presentation.</p>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🚀 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'> Features </span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 .Fully responsive layout (mobile & desktop) </p>
                     <p>2 .   Built using React.js </p>
                     <p>3 . Semantic and organized code structure </p>
                     <p>4 . Flexbox/Grid based layout </p>
                     <p>5 . Placeholder sections: Hero, About, Services, Contact, Footer . </p>
                  </div>
               </div>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🔧 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Technology Used</span></p>
                  <p className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>1 . Frontend: React.js, Tailwind CSS </p>
               </div>
               <div className='grid grid-cols-3 gap-2 mt-2 '>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://demo-portfolio-ruby.vercel.app/"><span><FaLink /></span> Live </a></p>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://github.com/fahimuddinmoon/demo-portfolio"><span><FaGithub /></span> Client</a></p>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
         {/* modal-4 */}
         <dialog id="my_modal_4" className="modal">
            <div className="modal-box backdrop-blur-3xl  bg-transparent">
               <h3 className="font-bold text-xl text-center bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">Project : Estate Web</h3>
               <h3 className="font-bold text-lg text-center"> 📝 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Description</span></h3>
               <p className=" font-semibold bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent text-sm">A full-stack real estate platform where users can buy and sell properties, post listings, and leave reviews. Admins approve property listings and can assign roles like Agent or Admin.</p>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🚀 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Features</span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 . Authentication & Authorization </p>
                     <p>2 .  Agent Verification Process </p>
                     <p>3 . Real-Time Bidding System </p>
                     <p>4 . Data Privacy & Route Protection </p>
                     <p>5 . Wishlist & User-Specific Data </p>
                     <p>6. Security Concerns </p>
                     <p>7 . Admin Dashboard & Monitoring </p>
                  </div>
               </div>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🔧 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Technology Used</span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 . Frontend: React.js, Tailwind CSS </p>
                     <p>2 . Backend: Node.js, Express.js </p>
                     <p>3 . Database: MongoDB </p>
                     <p>4 . Authentication & Hosting: Firebase </p>
                     <p>5 . Backend Hosting: Vercel</p>
                  </div>
               </div>
               <div className='grid grid-cols-3 gap-2 mt-2 '>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://final-project-f38eb.firebaseapp.com/"><span><FaLink /></span> Live </a></p>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://github.com/fahimuddinmoon/real-estate-web"><span><FaGithub /></span> Client</a></p>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://github.com/fahimuddinmoon/real-estate-web-server"><span><FaGithub /></span> Server</a></p>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
         {/* modal-5 */}
         <dialog id="my_modal_5" className="modal">
            <div className="modal-box backdrop-blur-3xl  bg-transparent">
               <h3 className="font-bold text-xl text-center bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">Project : Language Club</h3>
               <h3 className="font-bold text-lg text-center">📝 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Description</span></h3>
               <p className=" font-semibold bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent text-sm">This is a Language Club Course Site where teachers from different countries can sell courses based on their language expertise. Users can browse and purchase courses according to their needs. Purchased courses are accessible on a dedicated page, and teachers can view their own uploaded courses separately.</p>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🚀 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Features</span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 .  Authentication & Authorization </p>
                     <p>2 .  Course Posting & Management </p>
                     <p>3 .  Multi-Language Support </p>
                     <p>4 .  Wishlist & User-Specific Data </p>
                     <p>5 .  Security Concerns</p>
                  </div>
               </div>
               <div className="text-sm font-semibold">
                  <p className='text-lg font-bold text-center'>🔧 <span className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>Technology Used</span></p>
                  <div className='bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent'>
                     <p>1 . Frontend: React.js, Tailwind CSS </p>
                     <p>2 . Backend: Node.js, Express.js </p>
                     <p>3 . Database: MongoDB </p>
                     <p>4 . Authentication & Hosting: Firebase </p>
                     <p>5 . Backend Hosting: Vercel</p>
                  </div>
               </div>
               <div className='grid grid-cols-3 gap-2 mt-2 '>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://fir-projects-23909.web.app/"><span><FaLink /></span> Live </a></p>
                  <p className=' py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl'><a className='flex items-center text-gray-500 hover:text-white justify-center gap-1  text-sm font-semibold hover:font-bold ' href="https://github.com/fahimuddinmoon/language-club-web"><span><FaGithub /></span>Client</a></p>

               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </div>
   );
};

export default Project;