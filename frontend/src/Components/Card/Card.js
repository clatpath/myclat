import React from 'react';
import "./Card.css"

const Card = (props) => {
    const {name , date , imgsrc} = props
    return (
        <div className="card">
            <div className="cardHeader">
                <img src={imgsrc} />
                <div className="cardBody">
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div className="cardFooter">
                <button className="viewbtn">View</button>
                <button className="registerbtn">Enroll Now</button>
            </div>
        </div>
    );
};

export default Card;