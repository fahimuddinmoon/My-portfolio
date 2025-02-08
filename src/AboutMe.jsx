

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <h2 className="text-3xl font-extrabold text-center mb-7 p-11">Bringing Designs To Life With Code & Creativity</h2>
            <div className="sm:grid sm:grid-cols-2 gap-6">
                <div className="mb-4 p-5 bg-green-100 rounded-3xl">
                    <h3 className="text-2xl font-bold text-gray-800 my-3">1. My Programming Journey</h3>
                    <p className="text-sm font-bold text-gray-800 my-3">My journey into programming started with curiosity, which soon turned into a passion. I began with HTML, CSS, and JavaScript and gradually moved on to modern technologies like React and Tailwind CSS. Along the way, I also explored backend development, working with Firebase, Express.js, Node.js, and MongoDB. I love bridging design and functionality to create seamless user experiences. Learning new technologies and staying up-to-date is a crucial part of my journey.</p>
                </div>
                <div className="mb-4 p-5 bg-yellow-100 rounded-3xl">
                    <h3 className="text-2xl font-bold text-gray-800 my-3">2. My Hobbies</h3>
                    <p className="text-sm font-bold text-gray-800 my-3">Coding is not just my work; it is also one of my biggest hobbies. I enjoy learning new technologies, exploring open-source projects, and experimenting with UI/UX design. Besides programming, I love reading books, watching tech-related articles and videos, gaming, and watching movies. When I have time, I participate in coding challenges to sharpen my problem-solving skills.</p>
                </div>
                <div className="mb-4 p-5 bg-red-100 rounded-3xl">
                    <h3 className="text-2xl font-bold text-gray-800 my-3">3. The Type of Work I Enjoy</h3>
                    <p className="text-sm font-bold text-gray-800 my-3">I love working on creative and interactive web projects where user experience is a top priority. Crafting clean, performance-optimized, and responsive websites excites me. I enjoy tackling challenging problems and working with new technologies. Whether it is solo development or teamwork, I always strive to deliver high-quality solutions that enhance user engagement.</p>
                </div>
                <div className="mb-4 p-5 bg-blue-100 rounded-3xl">
                    <h3 className="text-2xl font-bold text-gray-800 my-3">4. My Personality</h3>
                    <p className="text-sm font-bold text-gray-800 my-3">I am a problem solver with an eye for detail, always eager to learn and improve. I enjoy combining logic and creativity to build efficient solutions. Patience and persistence drive me to tackle complex challenges. While I enjoy working in a team, I can also focus well on solo projects. My passion for technology and continuous learning keeps me motivated to grow and refine my skills.</p>
                </div>
               
            </div>
        </div>
    );
};

export default AboutMe;