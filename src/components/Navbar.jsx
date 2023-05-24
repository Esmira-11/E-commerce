import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalState';
// import { useContext } from 'react';
import NavBtn from './NavBtn';

function Navbar() {

  // const {selectedProduct} = useContext(GlobalContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background:'#8C01FA',top:0,width:'100%'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce
            <Link to='/products'><Button  style={{marginLeft:40,color:'#fff'}}>Products</Button></Link> 
          </Typography>
         
          
         
          {/* <div className="nav-backet">
            <span style={{fontSize:16}}>{selectedProduct.length}</span>
            <Link to='/backet'><ShoppingCartIcon style={{fill:'#fff'}}/></Link> 
          </div>
          <PersonIcon/> */}
          
          <NavBtn/>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar