
import Navber from "./Navber";
import Footer from "./Footer";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import WorkProcess from "./WorkProcess";


const Home = () => {
    return (
        <div className="w-full bg-gradient-to-r from-black to-blue-950">
            <div className="w-full fixed  "><Navber></Navber></div>
            <div className="  pt-16 "><Banner></Banner></div>
            <div className=" "><WorkProcess></WorkProcess></div>
            <div className=" "><AboutMe></AboutMe></div>
            <div className=" "><Skill></Skill></div>
            <div className=" "><Education></Education></div>
            <div className=" "><Project></Project></div>
            <div className=" "><Contact></Contact></div>
            <div className="  "><Footer></Footer></div>
        </div>
    );
};

export default Home;