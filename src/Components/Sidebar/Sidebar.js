import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { FaNewspaper } from 'react-icons/fa';
import { IoVideocamOutline } from 'react-icons/io5';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { MdLabelOutline } from 'react-icons/md';
import { HiCurrencyRupee } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

const Sidebar = () => {
    const [sidebarOpen , setSidebarOpen] = useState(false)
    const [sidebarMock , setSidebarMock] = useState(false)

    useEffect(()=>{
        sidebarOpen ? localStorage.setItem("sidebarStatus", "open"): localStorage.setItem("sidebarStatus", "close")
    },[sidebarOpen])


    
    return (
        <>
        <div className="hamburger">
            {!sidebarOpen ?<GiHamburgerMenu size={25} color="black" onClick={()=>setSidebarOpen(!sidebarOpen)} />:<CgClose size={25} color="black" onClick={()=>setSidebarOpen(!sidebarOpen)} />}
        </div>
        <div className="sidebar" style={!sidebarOpen ? {left: "-100%", transition: "500ms"}: {left:"0", transition: "500ms"}}>
            <div className="container">
                <div className="sidebar-data">
                    <div className="sidebarSearchbar">
                        <Searchbar />
                    </div>
                    <Link to="/">
                        <a><i><AiFillHome size={25}  /></i> Home</a>
                    </Link>
                    <Link to="/newsfeed">
                        <a><i><MdRssFeed size={25} /></i> News Feed</a>
                    </Link>
                    <Link to="/blogs">
                    <a><i><BsPencilSquare size={25} /></i> Blogs</a>
                    </Link>
                    <Link to="currentaffairs">
                        <a><i><FaNewspaper size={25}/></i> Current Affairs</a>
                    </Link>
                    <Link to="/liveclass">
                    <a><i><IoVideocamOutline size={25} color="red" /></i> Live Classes</a>
                    </Link>
                    <Link to="/downloads">
                    <a><i><FaCloudDownloadAlt size={25} /></i> Free Downloads</a>
                    </Link>
                    
                    <Link></Link>
                    <div className="sidebarMock" onClick={()=> setSidebarMock(!sidebarMock)}>
                    <a><i><RiComputerLine size={25} /></i> Mocks</a>
                    <i style={sidebarMock ? {transform: "rotate(90deg)",transition:"400ms"}: {transform: "rotate(0deg)",transition:"400ms"}}><AiOutlineArrowRight /></i>
                </div>
                    <div className="mockView" style={sidebarMock? {opacity:"1", transform: "scale(1)", transition: "500ms"}:{opacity:"0",transform: "scale(0)", transition: "500ms"}}>
                    <Link to="/mocks/free-mocks">
                        <a><i><MdLabelOutline size={25} /></i> Free Mocks</a>
                    </Link>
                    <Link to="/mocks/premium-mocks">
                        <a><i><HiCurrencyRupee size={25} color="#ffab73" /></i> Premium Mocks</a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Sidebar;