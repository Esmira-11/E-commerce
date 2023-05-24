import  Login  from '../components/public/Login';
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';


const Auth = () => {
  const {islogin} = useContext(GlobalContext);
  
  return islogin ? <Outlet/> : <Login/>
}

export default Auth