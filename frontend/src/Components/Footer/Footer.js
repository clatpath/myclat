import React from 'react';
import "./Footer.css";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare} from "react-icons/fa"

const Footer = () => {
    return (
        <>
        <div className="footer-one">
            <div className="footerFirstElement">
            <h1>Logo</h1>
                <div className="footerFirstElementIcons">
                    <FaFacebookSquare size={25} color="#3b5998" />
                    <FaTwitterSquare size={25} color="#00acee" />
                    <FaLinkedin size={25} color="#0e76a8" />
                    <FaInstagramSquare size={25} color="orange" />
                    <FaYoutubeSquare size={25} color="red" />
                </div>
            </div>
            <div className="footerAbout">
                <h4>About</h4>
                <p>About Us</p>
                <p>Impact Stories</p>
                <p>Media</p>
                <p>Our Partners</p>
            </div>
            <div className="footerHelp">
                <h4>Help</h4>
                <p>Contact</p>
                <p>Knowledge Base</p>
                <p>Career With Us</p>
                <p>Exam Calender</p>
                <p>Support</p>
            </div>
            <div className="footerStudent">
                <h4>Student</h4>
                <p>Test Series</p>
                <p>Live Classes</p>
                <p>Current Affairs</p>
                <p>Blogs</p>
                <p>Free Downloads</p>
            </div>
        </div>
        <div className="footer-two">
            <div className="FsectionOne">
                <p>Copyright © 2021 Clat Path Community Pvt. Ltd.</p>
            </div>
            <div className="FsectionTwo">
                <a>Disclaimer</a>
                <a>Terms and Conditions</a>
                <a>Our Code of ethics</a>
                <a>Private Policy</a>
                <a>Copyright</a>
                <a>Return Policy</a>
                <a>Sitemap</a>
            </div>

        </div>
    </>
    );
};

export default Footer;