import pic1 from '../public/Image/Screenshot 2025-07-02 011815.png'
import pic2 from '../public/Image/Screenshot 2025-07-02 011857.png'
import pic3 from '../public/Image/Screenshot 2025-07-02 011957.png'
import pic4 from '../public/Image/Screenshot 2025-07-02 014102.png'
const Project = () => {
   return (
      <div className="mx-3 md:mx-11 lg:mx-20">
         <h3 className="text-4xl font-bold text-center mb-12  bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">Some Of My Projects</h3>
         <div className=" my-5  grid md:grid-cols-2 lg:grid-cols-2 gap-7 lg:mx-24 ">
            {/* project - 1 */}
            <div className=" items-center  gap-7 justify-between border-3 border-blue-400 rounded-3xl p-4 my-3 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic3} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Job Portal</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Backend</p>
                        <button className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-bold'>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
            {/* project - 2 */}
            <div className=" items-center  gap-7 justify-between border-3 my-3 border-blue-400 rounded-3xl p-4 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic4} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Job Portal</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Design</p>
                        <button className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-bold'>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
            {/* project - 3 */}
            <div className=" items-center  gap-7 justify-between border-3   my-3 border-blue-400 rounded-3xl p-4 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic1} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Job Portal</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Backend</p>
                        <button className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-bold'>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
            {/* project - 4 */}
            <div className=" items-center  gap-7 justify-between border-3 my-3 border-blue-400 rounded-3xl p-4 border-animated-projects text-white">
               <div className='overflow-hidden'>
                  <img className='w-full h-full rounded-2xl ' src={pic2} alt="" />
                  <div className='my-3 '>
                     <h2 className='bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent text-2xl font-bold'>Job Portal</h2>
                     <div className='flex justify-between items-center pt-2'>
                        <p className='text-xl md:text-lg font-bold text-gray-400'>Frontend & Backend</p>
                        <button className='px-3 py-1 bg-gradient-to-r  from-blue-800 to-purple-950 rounded-2xl text-sm font-bold'>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;