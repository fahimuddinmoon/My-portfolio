import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import pic from '../public/Image/IMG_3280.jpg'
import pic2 from '../public/Image/icons8-portfolio-96.png'
import pic3 from '../public/Image/p12.png'


const Layout = () => {
    return (
        <div className="">
            
            <div className="lg:p-6 bg-black flex justify-between items-center p-2">
                <div className="text-3xl text-blue-600"><Link title="Back To Home" to='/'><FaRegArrowAltCircleLeft /></Link></div>
                <div className=''>
                    <Link className="flex items-center gap-1" to='/'>
                        <img className='w-11 h-11 object-cover rounded-full' src={pic2} alt="" />
                        <a className="btn btn-ghost text-3xl font-extrabold m-0 p-0 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent"> <i>Fahim</i></a></Link>
                </div>
                <div>
                    <img title="Fahim Uddin Moon" className="w-12 h-12 object-cover rounded-full" src={pic} alt="" />
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-200 to-gray-600">
                <div>
                    <h3 className="text-4xl font-bold text-center py-8">Project Details</h3>
                </div>
                <div className="sm:w-8/12 sm:mx-auto py-8 px-3">
                    <img className="my-3 border-4 rounded-3xl border-gray-700 p-3" src={pic3} alt="" />
                    <p className="py-3 text-lg font-bold text-gray-700">Brief description : - A full-stack real estate platform where users can buy and sell properties, post listings, and leave reviews. Admins approve property listings and can assign roles like Agent or Admin.</p>
                    <p className="py-3 text-lg font-bold underline text-gray-700"><a className="text-blue-800" href="https://final-project-f38eb.firebaseapp.com/">Live project link : - https://final-project-f38eb.firebaseapp.com/</a></p>
                    <p className="py-3 text-lg font-bold underline text-gray-700"><a className="text-blue-800" href="https://github.com/fahimuddinmoon/real-estate-web"> GitHub repository link : - https://github.com/fahimuddinmoon/real-estate-web</a></p>
                    
                    <div className=" py-3 text-lg font-bold text-gray-700">
                        <p>Challenges : - </p>
                        <p>1 . Authentication & Authorization </p>
                        <p>2 .  Agent Verification Process </p>
                        <p>3 . Real-Time Bidding System </p>
                        <p>4 . Data Privacy & Route Protection </p>
                        <p>5 . Wishlist & User-Specific Data </p>
                        <p>6. Security Concerns </p>
                        <p>7 . Admin Dashboard & Monitoring </p>

                    </div>
                    <div className=" py-3 text-lg font-bold text-gray-700">
                        <p>Main technology used : - </p>
                        <p>1 . Frontend: React.js, Tailwind CSS </p>
                        <p>2 . Backend: Node.js, Express.js </p>
                        <p>3 . Database: MongoDB </p>
                        <p>4 . Authentication & Hosting: Firebase </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Layout;