import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import pic from '../public/Image/p10.png'
import pic2 from '../public/Image/p11.png'
import pic3 from '../public/Image/p12.png'
const Project = () => {
    return (
       <div>
         <h3 className="text-4xl font-bold text-center mb-12">Some Of My Projects</h3>
         <div className=" my-5  ">

            <div className="  sm:flex items-center gap-7 justify-between border-3 border-blue-400 rounded-3xl p-9 my-3 bg-black text-white">
               <div>
               <h3 className="text-2xl font-bold my-3"><a href="https://final-project-f38eb.web.app/">Name : real-estate-web</a></h3>
                <p className="text-sm font-bold my-3">A full-stack real estate platform where users can buy and sell properties, post listings, and leave reviews. Admins approve property listings and can assign roles like Agent or Admin.</p>
                <p><a className="underline text-sm font-bold text-blue-800" href="https://final-project-f38eb.web.app/">Project Link : https://final-project-f38eb.web.app/</a></p>

                <motion.button 
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.9 }}
                 style={{ textAlign: 'center' }}
                className="px-2 py-2 mb-3 bg-gradient-to-r from-blue-600 to-pink-700 text-sm text-white mt-4 font-bold rounded-2xl"><Link to='/project1'>View More</Link></motion.button>
               </div>
               <img className="w-96 border-4 p-2 rounded-2xl border-gray-400" src={pic3} alt="" />
            </div>

            <div className="  sm:flex items-center gap-7 justify-between border-3   my-3 border-blue-400 rounded-3xl p-9 bg-black text-white">
              <div>
              <h3 className="text-2xl font-bold my-3"><a href="https://fir-projects-23909.web.app/">Name : language-club-web </a></h3>
                <p className="text-sm font-bold my-3">This is a Language Club Course Site where teachers from different countries can sell courses based on their language expertise. Users can browse and purchase courses according to their needs.......</p>
                <p><a className="underline text-sm font-bold text-blue-800" href="https://fir-projects-23909.web.app/">Project Link : https://fir-projects-23909.web.app/</a></p>

                <motion.button 
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.9 }}
                 style={{ textAlign: 'center' }}
                className="px-2 py-2 mb-3 bg-gradient-to-r from-blue-600 to-pink-700 text-sm text-white mt-4 font-bold rounded-2xl"><Link to='/project2'>View More</Link></motion.button>
              </div>
              <img className="w-96 border-4 p-2 rounded-2xl border-gray-400" src={pic2} alt="" />
            </div>

            <div className="  sm:flex items-center gap-7 justify-between border-3 my-3 border-blue-400 rounded-3xl p-9 bg-black text-white">
               <div>
               <h3 className="text-2xl font-bold my-3"><a href="https://project-ten-96173.web.app/">Name : sports-store</a></h3>
                <p className="text-sm font-bold my-3">This is a Sports Equipment Store, where customers can purchase various sports items such as bats, balls, and other gear. Each product has a stock limit, and once a product is out of stock......</p>
                <p><a className="underline text-sm font-bold text-blue-800" href="https://project-ten-96173.web.app/">Project Link : https://project-ten-96173.web.app/</a></p>

                <motion.button 
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.9 }}
                 style={{ textAlign: 'center' }}
                className="px-2 py-2 mb-3 bg-gradient-to-r from-blue-600 to-pink-700 text-sm text-white mt-4 font-bold rounded-2xl"><Link to='/project3'>View More</Link></motion.button>
               </div>
               <img className="w-96 border-4 p-2 rounded-2xl border-gray-400" src={pic} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Project;