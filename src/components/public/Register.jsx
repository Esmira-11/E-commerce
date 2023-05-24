import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useFormik } from 'formik';;
import * as Yup from "yup";
import { GlobalContext } from "../../context/GlobalState";


function Register() {

   const {user,setuser} = useContext(GlobalContext);

   const saveUserToStorage = () => {
    localStorage.setItem("user",JSON.stringify(user))
  }

  useEffect(() => {
    saveUserToStorage()
  }, [user])
      
    const addValidationSchema = Yup.object().shape({
        username: Yup.string().max(50, 'Too Long!').required("Username field cannot be empty!"),
        password: Yup.string().min(8, 'Too Short!').required("Password field cannot be empty!"),
        confirmPassword: Yup.string().required("Password field cannot be empty!").when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: () => Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
          }),

      });

    const formik = useFormik({
        initialValues: {
            username:'',
            password:'',
            confirmPassword:''
        },
        validationSchema: addValidationSchema,
        onSubmit: values => {
            setuser([...user,values])
            alert("Success")
        },
      });

    
  return (
    <>
    <form onSubmit={formik.handleSubmit} style={{paddingTop:50,display:'flex' , flexDirection:'column', alignItems:'center',justifyContent:'space-around',width: 400,margin:'0 auto',height:'60vh'}}>
        
        <label htmlFor="username" style={{fontSize:20}}>Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          style={{width:300, padding:10, borderRadius:15}}
        />
         <p style={{ color: "red" }}>{formik.errors?.username}</p>
 
 
        <label htmlFor="password" style={{fontSize:20}}>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          style={{width:300, padding:10, borderRadius:15}}
        />
         <p style={{ color: "red" }}>{formik.errors?.password}</p>
 
        <label htmlFor="confirmPassword" style={{fontSize:20}}>Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          style={{width:300, padding:10, borderRadius:15}}
        />
         <p style={{ color: "red" }}>{formik.errors?.confirmPassword}</p>
 
 
        <button type="submit" style={{width:200,cursor:'pointer',borderRadius:10,border:'none',padding: 10,fontSize:20, background:'linear-gradient(98.88deg, #8C01FA -2.99%, #000000 102.28%)',color:'#fff'}}>Submit</button>
        {/* background:linear-gradient(98.88deg, #8C01FA -2.99%, #000000 102.28%);border-radius:36px;border:none;padding:16px 33px;color:#fff */}
    </form>
 
    </>
  )
}

export default Register