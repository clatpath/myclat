import React from 'react';
import "./Home.css"
import { GiGraduateCap, GiPapers } from 'react-icons/gi';
import { IoCloudDownloadSharp } from 'react-icons/io5';
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Articlecard from '../../Components/Articlecard/Articlecard';
import Feedback from '../../Components/Feedback/Feedback';
// import Feedback from '../../Components/Feedback/Feedback';

const Home = () => {
    return (
        <>
            <div className="homeCarousel">
                <div className="pic-ctn">
                    <img src="#" alt="" className="pic" style={{backgroundColor: "#b8b5ff"}} />
                    <img src="#" alt="" className="pic" style={{backgroundColor: "#f25287"}} />
                    <img src="#" alt="" className="pic" style={{backgroundColor: "#eff0b6"}} />
                    <img src="#" alt="" className="pic" style={{backgroundColor: "#eaffd0"}} />
                    <img src="#" alt="" className="pic" style={{backgroundColor: "#faf3e0"}} />
                </div>
            </div>
            <div className="homeDiscover">
                <h1>Discover New Way of Learning.</h1>
                <h2>Get Free Access to our content & Boost your Preparation.</h2>
                <div className="discoverLinks">
                    <a href="#">Test Series</a> |
                    <a href="#">Live Classes</a> |
                    <a href="#">Study Meterials</a> |
                    <a href="#">Current Affairs</a> 
                </div>
            </div>
            <div className="homeArticles">
                <h2 className="articleHeadings">Latest Articles</h2>
                <div className="cardArticleSection">
                <Articlecard />
                <Articlecard />
                <Articlecard />    
                </div>
            </div>
            <div className="homeScaleSection">
                <div>
                    <GiGraduateCap size={50} />
                    <h3>10,000+</h3>
                    <p>Satisfied Learners</p>
                </div>
                <div>
                    <IoCloudDownloadSharp size={50} />
                    <h3>40,000+</h3>
                    <p>Downloads</p>
                </div>
                <div>
                    <GiPapers size ={50} />
                    <h3>2,000+</h3>
                    <p>Test Attempted</p>
                </div>
            </div>
            <div className="upcomingSection">
                <h2>Upcoming Mocks</h2>
                <div className="cardSection">
                <Card name = "CLAT" date="22/03/2021" imgsrc="https://images.pexels.com/photos/3808060/pexels-photo-3808060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card name = "AILET" date="03/04/2021" imgsrc="https://images.pexels.com/photos/3825461/pexels-photo-3825461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card name = "MHCET" date="05/04/2021" imgsrc="https://images.pexels.com/photos/3771114/pexels-photo-3771114.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Card name = "Other Law Exams" date="05/05/2021" imgsrc="https://images.pexels.com/photos/3771114/pexels-photo-3771114.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
            </div>
            <div className="topperTestimonials">
                {/* <h2>Success Stories</h2> */}
            </div>
            <div>
                {/* <Feedback /> */}
            </div>
            <Footer />
        </>
    );
};

export default Home;