import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductPage from './components/public/ProductPage'
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/components/public/Home'
import Backet from './components/private/Backet'
import Register from './components/public/Register'
import { GlobalProvider } from './context/GlobalState'
import Login from './components/public/Login'
import Auth from './components/Auth'
import { GlobalContext } from './context/GlobalState'


function App() {
 
  return (
    <>
    <GlobalProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route element={<Auth/>}>
              <Route path='/backet' element={<Backet/>}/>
            </Route>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>

          </Routes>
          
      </Router>
    </GlobalProvider>

    
     
     {/* <Login/> */}



     

    </>
  )
}

export default App
