import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Layout3 = () => {
    return (
        <div className="">
            
            <div className="lg:p-6 bg-black flex justify-between items-center p-2">
                <div className="text-3xl text-blue-600"><Link title="Back To Home" to='/'><FaRegArrowAltCircleLeft /></Link></div>
                <div className=''>
                    <Link className="flex items-center gap-1" to='/'>
                        <img className='w-11 h-11 object-cover rounded-full' src='../public/Image/icons8-portfolio-96.png' alt="" />
                        <a className="btn btn-ghost text-3xl font-extrabold m-0 p-0 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent"> <i>Fahim</i></a></Link>
                </div>
                <div>
                    <img title="Fahim Uddin Moon" className="w-12 h-12 object-cover rounded-full" src="../public/Image/IMG_3280.jpg" alt="" />
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-200 to-gray-600">
                <div>
                    <h3 className="text-4xl font-bold text-center py-8">Project Details</h3>
                </div>
                <div className="sm:w-8/12 sm:mx-auto py-8 px-3">
                    <img className="my-3 border-4 rounded-3xl border-gray-700 p-3" src="../public/Image/p10.png" alt="" />
                    <p className=" py-3 text-lg font-bold text-gray-700">Brief description : - This is a Sports Equipment Store, where customers can purchase various sports items such as bats, balls, and other gear. Each product has a stock limit, and once a product is out of stock, it cannot be purchased. Customers can view all their purchased items on a dedicated route.</p>
                    <p className="py-3text-lg font-bold underline text-gray-700"><a className="text-blue-800" href=" https://project-ten-96173.web.app/">Live project link : -  https://project-ten-96173.web.app/</a></p>
                    <p className="py-3 text-lg font-bold underline text-gray-700"><a className="text-blue-800" href="https://github.com/fahimuddinmoon/sports-store"> GitHub repository link : - https://github.com/fahimuddinmoon/sports-store</a></p>
                    <div className=" py-3 text-lg font-bold text-gray-700">
                        <p>Challenges : - </p>
                        <p>1 . Stock Management </p>
                        <p>2 .  Authentication & Authorization </p>
                        <p>3 . Cart Management </p>
                        <p>4 . Order Processing & Validation </p>
                        <p>5 . UI/UX Challenges </p>


                    </div>
                    <div className="py-3 text-lg font-bold text-gray-700">
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

export default Layout3;