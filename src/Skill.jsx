import { motion } from 'framer-motion';

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
                    ><img title="HTML" className="mx-auto w-12 h-12 " src="../public/Image/icons8-html-5-96.png" alt="" /></motion.li>

                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="CSS" src="../public/Image/icons8-css-96.png" alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="TailwindCSS" src="../public/Image/icons8-tailwindcss-96.png" alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="Javascript" src="../public/Image/icons8-javascript-96.png" alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="React" src="../public/Image/icons8-react-200.png" alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="NodeJS" src="../public/Image/icons8-node-js-96.png" alt="" /></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ padding: '50px', textAlign: 'center' }}><img className="mx-auto w-16 h-16 " title="MongoDB" src="../public/Image/icons8-mongo-db-96.png" alt="" /></motion.li>
                </ul>
            </div>
        </div>
    );
};

export default Skill;