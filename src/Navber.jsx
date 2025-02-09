import pic from '../public/Image/icons8-portfolio-96.png'

const Navber = () => {
    return (
        <div  className="navbar bg-black z-50 sm:px-11">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-blue-500  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className='text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent' href="#nav">Home</a></li>
                        <li><a className='text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent' href="#aboutMe">About Me</a></li>
                        <li><a className='text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent' href="#contact">Contact Me</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <img className='w-11 h-11 object-cover rounded-full' src={pic} alt="" />
                    <a className="btn btn-ghost text-3xl font-extrabold m-0 p-0 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent"> <i>Fahim</i></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent' href="#nav">Home</a></li>
                    <li><a className='text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent' href="#aboutMe">About Me</a></li>
                    <li><a className='text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent' href="#contact">Contact Me</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="" download className="btn text-sm font-semibold border-2 border-blue-400 bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent">Resume</a>
            </div>
        </div>
    );
};

export default Navber;