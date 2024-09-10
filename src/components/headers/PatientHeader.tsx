import React,{useState} from "react";
import StethoscopeIcon from "../../assets/Icon stethoscope.svg";
import ProfileIcon from "../../assets/Icon account circle.svg";
import HamburgerButton from "../../assets/Icon bars.svg";
import HomeIcon from "../../assets/Icon home.svg"
import DoctorIcon from '../../assets/Icon user md.svg'
import ChatIcon from '../../assets/Icon comments.svg'
import CalenderIcon from '../../assets/Icon calendar alt.svg'
import ClossIcon from '../../assets/Icon times.svg'
import { useNavigate } from "react-router-dom";

const PatientHeader: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/auth'); 
      };

    const [isSidebarOpen,setIsSidebarOpen]=useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (<div>
        <header className="bg-black">
            <nav className="container mx-auto py-5 flex justify-between items-center font-lexend">
                {/* HamburgerButton */}
                <div className="flex items-center md:hidden" onClick={toggleSidebar}>
                    <img src={HamburgerButton} alt="Profile Icon" className="h-8 w-8 ml-3 md:ml-0" />
                </div>
                {/* Logo Section */}
                <div className=" flex items-center ml-1 ">
                    <img
                        src={StethoscopeIcon}
                        alt="Stethoscope Icon"
                        className="h-8 w-8"
                    />
                    <span className="ml-2 text-white text-2xl font-bold cursor-pointer">
                        DocEase
                    </span>
                </div>



                {/* Navigation Links */}
                <ul className="hidden md:flex items-center text-white gap-6     text-base cursor-pointer font-medium w-full justify-center">
                    <li className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300">
                        <img src={HomeIcon} alt="Home Icon" className="h-5 w-5 " />
                        <span>Home</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300">
                        <img src={DoctorIcon} alt="Home Icon" className="h-5 w-5" />
                        <span>Find Doctor</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300">
                        <img src={CalenderIcon} alt="Home Icon" className="h-5 w-5" />
                        <span>Appointments</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300">
                        <img src={ChatIcon} alt="Home Icon" className="h-5 w-5" />
                        <span>Chat</span>
                    </li>
                </ul>

                {/* Profile Icon */}
                <div className="flex items-center mr-3 md:mr-1 " onClick={handleClick}>
                    <img src={ProfileIcon} alt="Profile Icon" className="h-8 w-8" />
                </div>
            </nav>
        </header>

        {/* Side Bar */}
        <div className={`bg-black h-full fixed top-0 left-0 w-64 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <ul className="flex flex-col gap-8 text-white text-lg cursor-pointer font-medium p-9">
                <li className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300" onClick={toggleSidebar}>
                    <img src={ClossIcon} alt="Home Icon" className="h-6 w-6" />

                </li>
                <li className="flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300">
                    <img src={HomeIcon} alt="Home Icon" className="h-6 w-6" />
                    <span>Home</span>
                </li>
                <li className="flex items-center space-x-3 ">
                    <img src={DoctorIcon} alt="Home Icon" className="h-6 w-6" />
                    <span>Find Doctor</span>
                </li>
                <li className="flex items-center space-x-3 ">
                    <img src={CalenderIcon} alt="Home Icon" className="h-6 w-6" />
                    <span>Appointments</span>
                </li>
                <li className="flex items-center space-x-3 ">
                    <img src={ChatIcon} alt="Home Icon" className="h-6 w-6" />
                    <span>Chat</span>
                </li>
            </ul>
        </div>

    </div>



    );
};

export default PatientHeader;
