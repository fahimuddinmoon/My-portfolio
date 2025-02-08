
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <img className='w-24 h-24 object-cover rounded-full' src='../public/Image/IMG_3280.jpg' alt="" />
                <p className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>
                  <i>Fahim Uddin Moon</i>
                </p>
                <p className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-900 bg-clip-text text-transparent'>
                    <i>
                        Frontend Web Developer
                    </i>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-2xl">Social</h6>
                <div className="grid grid-flow-col gap-4">
                   <a className='text-4xl' href="https://www.facebook.com/fahim.moon.98"><BsFacebook /></a>
                   <a className='text-4xl' href="https://github.com/fahimuddinmoon"><FaGithub /></a>
                   
                </div>
            </nav>
        </footer>
    );
};

export default Footer;