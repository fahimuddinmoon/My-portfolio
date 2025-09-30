
import Navber from "./Navber";
import Footer from "./Footer";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import WorkProcess from "./WorkProcess";


const Home = () => {
    return (
        <div className="w-full  bg-[#1b1b1b] overflow-hidden">
            <div className="w-full fixed  "><Navber></Navber></div>
            <div className="  pt-16 "><Banner></Banner></div>
            <div className=" "><WorkProcess></WorkProcess></div>
            <div className=" "><AboutMe></AboutMe></div>
            <div className=" "><Skill></Skill></div>
            <div className=" "><Education></Education></div>
            <div className=" "><Project></Project></div>
            <div className="  "><Footer></Footer></div>
        </div>
    );
};

export default Home;