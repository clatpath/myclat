import React from 'react';
import {AiFillCloseCircle} from "react-icons/ai";
import "./Alert.css";

const Alert = () => {
    return (
        <div className="Alert">
            <div className="alertPopup">
                <p>This is very wrong way</p>
                <i><AiFillCloseCircle /></i>
            </div>
        </div>
    );
};

export default Alert;