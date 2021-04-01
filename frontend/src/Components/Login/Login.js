import React, { useState } from 'react';
import "./Login.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from 'react-router';
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

const Login = () => {
    const [loading , setLoading] = useState(false);

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
                        console.log(res, "apiresponse")
                    }).catch((err)=>{
                        console.log(err , "loginerror");
                    })
                } catch (error) {
                    console.log(error , "apierror")  
                }
                setLoading(false);
            }, 5000);    
        },
        validationSchema,
      });


    return (
        <>
        {loading ? <LinearProgress />: null}
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