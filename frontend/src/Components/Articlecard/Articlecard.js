import React from 'react';
import "./Articlecard.css"

const Articlecard = () => {
    return (
        <div className="blogs">
            <img src="https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> 
            <div className="blogHeading">
                <h4>Lorem ipsum</h4>
                <i>19/03/2020</i>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                        <a href="#">Read More</a>
            </p> 
        </div>
    );
};

export default Articlecard;