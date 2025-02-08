
import Navber from "./Navber";
import Footer from "./Footer";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";


const Home = () => {
    return (
        <div className="w-full">
            <div className="w-full fixed bg-gradient-to-r from-gray-200 to-gray-600 "><Navber></Navber></div>
            <div className="  pt-16 bg-gradient-to-r from-gray-200 to-gray-600"><Banner></Banner></div>
            <div className="  py-7 bg-gradient-to-r from-gray-200 to-gray-600 p-11"><AboutMe></AboutMe></div>
            <div className="  py-7 bg-gradient-to-r from-gray-200 to-gray-600 p-11"><Skill></Skill></div>
            <div className="  py-7 bg-gradient-to-r from-gray-200 to-gray-600 p-11"><Education></Education></div>
            <div className="  py-7 bg-gradient-to-r from-gray-200 to-gray-600 p-11"><Project></Project></div>
            <div className="  py-7 bg-gradient-to-r from-gray-200 to-gray-600 p-11"><Contact></Contact></div>
            <div className="  bg-gradient-to-r from-gray-200 to-gray-600"><Footer></Footer></div>
        </div>
    );
};

export default Home;