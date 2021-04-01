import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Signup.css"
import { useHistory } from 'react-router';
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

const Signup = () => {
    const [loading , setLoading] = useState(false);
    const [snakbarOpen , setSnakbarOpen] = useState(false);
    const [snakbarMsg, setSnakbarMsg] = useState(null)
    const [alertSeverity, setAlertSeverity] = useState(null);

    const history = useHistory();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string()
      .min(8, "Password is too short!")
      .matches(/[a-zA-Z]/, "Password must contain letters!")
      .required("Required!"),
    confirmPassword: Yup.string()
      .min(8, "Password is too short!")
      .matches(/[a-zA-Z]/, "Password must contain letters!")
      .required("Required!"),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Required!")
    });

        const formik = useFormik({
            initialValues: {
                name:"",
                phoneNumber:"",
                email:"",
                classes:"",
                password:"",
                confirmPassword:""
            },
            onSubmit: (values) => {
                setLoading(true);
                setTimeout(() => {
                    try {
                        axios.post("http://localhost:5000/myclat/users/register",values).then((res)=>{
                            console.log(res, "apiresponse")
                            setAlertSeverity("success");
                            setSnakbarMsg(`${res.data.message}`);
                            setSnakbarOpen(true);

                        }).catch((err)=>{
                            console.log(err , "registererror");
                            setAlertSeverity("error");
                            setSnakbarMsg("Email is already in use");
                            setSnakbarOpen(true);
                        })
                    } catch (error) {
                        console.log(error , "apierror")  
                    }
                    setLoading(false);
                }, 5000);    
            },
            validationSchema,
          });

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    const handleClose = () => {
        setSnakbarOpen(false)
    }

    return (
        <>
        {loading ? <LinearProgress />: null}
        <Snackbar anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snakbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertSeverity}>
          {snakbarMsg ? snakbarMsg : null}
        </Alert>
      </Snackbar>
        <div className="formContainer">
            <form className="Form" onSubmit={formik.handleSubmit}>
                <h1 className="formHeader">Sign up</h1>
                <label htmlFor="name" >Name</label>
                <input name="name" type="text" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name} required></input>
                {formik.touched.name && formik.errors.name ? (
                    <span className="alertSpan">{formik.errors.name}</span>
                    ) : 
                    null}
                <label htmlFor="phoneNumber" >Mobile Number</label>
                <div className="mobileSection">
                <input name="phoneNumber" type="number" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneNumber} required/>
                <a>verify</a>
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <span className="alertSpan">{formik.errors.phoneNumber}</span>
                ) : null}
                <label htmlFor="email">Email</label>
                <input name="email" type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} required/>
                {formik.touched.email && formik.errors.email ? (
                    <span className="alertSpan">{formik.errors.email}</span>
                ) : null}
                <div className="Formselect">
                <label htmlFor="classes">Class:</label>
                <select name="classes" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.classes} required>
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
                {formik.touched.classes && formik.errors.classes ? (
                    <span className="alertSpan">{formik.errors.classes}</span>
                ) : null}
                <label htmlFor="password">Password</label>
                <input name="password" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} required/>
                {formik.touched.password && formik.errors.password ? (
                    <span className="alertSpan">{formik.errors.password}</span>
                ) : null}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input name="confirmPassword" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword} required/>
                {formik.touched.confirmPassword && formik.values.confirmPassword !== formik.values.password ? (
                    <span className="alertSpan">Password Do Not match</span>
                ) : null}
                <button className="signUpButton" type="submit" disabled={!formik.isValid}>Sign up</button>
            </form>
        </div>
        </>
    );
};

export default Signup;