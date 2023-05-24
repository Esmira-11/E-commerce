import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';


function NavBtn() {
    const {selectedProduct} = useContext(GlobalContext)
    const {islogin} = useContext(GlobalContext);
    
    if(islogin){
        return (
            <>
                <div className="nav-backet">
                    <span style={{fontSize:16}}>{selectedProduct.length}</span>
                    <Link to='/backet'><ShoppingCartIcon style={{fill:'#fff'}}/></Link> 
                </div>
                <PersonIcon/>
            </>

        )
    }
    else{
        return(
            <>
                <div className="nav-login" >
                    <Link to='/login' style={{color:'#fff',textDecoration:'none',paddingRight:15,fontSize:18}}>SIGN IN</Link> 
                </div>
                <div className="nav-register">
                    <Link to='/register' style={{color:'#fff',textDecoration:'none',paddingRight:15,fontSize:18}}>SIGN UP</Link> 
                </div>
            </>
        )
    }
  
}

export default NavBtn