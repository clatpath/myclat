import React from 'react';
import "./Signup.css"

const Signup = () => {
    return (
        <div className="formContainer">
            <form className="Form">
                <h1 className="formHeader">Sign up</h1>
                <label for="Fullname" >Name</label>
                <input name="Fullname" type="text" required />
                <label for="Mobile" >Mobile Number</label>
                <div className="mobileSection">
                <input name="Mobile" type="number" required />
                <button>verify</button>
                </div>
                <label for="Email">Email</label>
                <input name="Email" type="email" required />
                <div className="Formselect">
                <label for="class">Class:</label>
                <select name="class">
                    <option value="none">None</option>
                    <option value="8th" >8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="12-A">12th Appearing</option>
                    <option value="12-P">12th Passed</option>
                    <option value="llb">LLB</option>
                    <option value="judiciary">Judiciary</option>
                </select>
                </div>
                <label for="Password">Password</label>
                <input name="Password" type="password" required />
                <label for="Password">Confirm Password</label>
                <input name="Password" type="password" required />
                <button className="signUpButton" type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;