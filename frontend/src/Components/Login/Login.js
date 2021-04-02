import React, { useState } from 'react';
import "./Login.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from 'react-router';
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Login = () => {
    const [loading , setLoading] = useState(false);
    const [snakbarOpen , setSnakbarOpen] = useState(false);
    const [snakbarMsg, setSnakbarMsg] = useState(null)

    const history = useHistory();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string()
      .min(8, "Password is too short!")
      .matches(/[a-zA-Z]/, "Password must contain letters!")
      .required("Required!"),
    });

    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
        },
        onSubmit: (values) => {
            setLoading(true);
            setTimeout(() => {
                try {
                    axios.post("http://localhost:5000/myclat/users/login",values).then((res)=>{
                        // localStorage.setItem("myClatUId", res.data.user._id);
                        // localStorage.setItem("myClatEmail", res.data.user.email);
                        // localStorage.setItem("myClatName", res.data.user.name);
                        // localStorage.setItem("myClatPhoneNumber", res.data.user.phoneNumber);
                        // localStorage.setItem("myClatUserImage", res.data.user.image);
                    }).catch((err)=>{
                        if(err.response.status === 404){
                            setSnakbarMsg("Server Error")
                        } else {
                        setSnakbarMsg(`${err.response.data}`)
                        }
                        setSnakbarOpen(true)
                    })
                } catch (error) {
                    setSnakbarMsg("Server Error")
                    setSnakbarOpen(true)
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
        <Alert onClose={handleClose} severity="error">
          {snakbarMsg ? snakbarMsg : null}
        </Alert>
      </Snackbar>
        <div className="formContainer">
            <form className="loginForm" onSubmit={formik.handleSubmit}>
                <h1 className="formHeader">Log in</h1>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} required/>
                {formik.touched.email && formik.errors.email ? (
                    <span className="alertSpan">{formik.errors.email}</span>
                ) : null}
                <label htmlFor="password">Password</label>
                <input name="password" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} required/>
                {formik.touched.password && formik.errors.password ? (
                    <span className="alertSpan">{formik.errors.password}</span>
                ) : null}
                <button className="loginButton" type="submit">Login</button>
            </form>
        </div>
        </>
    );
};

export default Login;