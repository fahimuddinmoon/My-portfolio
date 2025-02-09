import { motion } from 'framer-motion';
import pic from '../public/Image/icons8-html-5-96.png'
import pic2 from '../public/Image/icons8-css-96.png'
import pic3 from '../public/Image/icons8-tailwindcss-96.png'
import pic4 from '../public/Image/icons8-javascript-96.png'
import pic5 from '../public/Image/icons8-react-200.png'
import pic6 from '../public/Image/icons8-node-js-96.png'
import pic7 from '../public/Image/icons8-mongo-db-96.png'
const Skill = () => {
    return (
        <div>
            <h3 className="text-3xl font-extrabold text-center mb-7">Skills That Drive Success</h3>
            <div className="">
                <ul className="sm:grid lg:grid-cols-7 md:grid-cols-3 items-center">
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}
                    ><img title="HTML" className="mx-auto w-12 h-12 " src={pic} alt="" /></motion.li>

                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="CSS" src={pic2} alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="TailwindCSS" src={pic3} alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="Javascript" src={pic4} alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="React" src={pic5} alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="NodeJS" src={pic6} alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="MongoDB" src={pic7} alt="" /></motion.li>
                </ul>
            </div>
        </div>
    );
};

export default Skill;