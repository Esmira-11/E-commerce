import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useFormik } from 'formik';;
import * as Yup from "yup";
import { GlobalContext } from "../../context/GlobalState";


function Login() {

    const {user,islogin,setislogin} = useContext(GlobalContext);

    const saveLoginStatusStorage = () => {
        localStorage.setItem("isLogin",JSON.stringify(islogin))
      }
    
    useEffect(() => {
        saveLoginStatusStorage()
    },[islogin])

    const addValidationSchema = Yup.object().shape({
        username: Yup.string().max(50, 'Too Long!').required("Username field cannot be empty!"),
        password: Yup.string().min(8, 'Too Short!').required("Password field cannot be empty!"),
      });

    const formik = useFormik({
        initialValues: {
            username:'',
            password:'',
        },
        validationSchema: addValidationSchema,
        onSubmit: values => {
        user.map(item => {
            if(item.username === values.username && item.password === values.password){
                setislogin(true)
                alert("Success")
            }
        })
        if(islogin===false){
            alert("Unsuccessful attempt")
        }
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
 
 
        <button type="submit" style={{width:200,cursor:'pointer',borderRadius:10,border:'none',padding: 10,fontSize:20, background:'linear-gradient(98.88deg, #8C01FA -2.99%, #000000 102.28%)',color:'#fff'}}>Submit</button>
        {/* background:linear-gradient(98.88deg, #8C01FA -2.99%, #000000 102.28%);border-radius:36px;border:none;padding:16px 33px;color:#fff */}
    </form>
 

    </>
  )
}

export default Login