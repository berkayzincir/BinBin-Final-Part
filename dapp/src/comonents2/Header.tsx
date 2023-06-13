import React from 'react';
import { Button, Navbar, NavbarBrand,  NavItem,Nav } from 'react-bootstrap'
import { Balance } from '../components/Balance'
import { Connect } from '../components/Connect';
import "./CSS/NavItem.css"
import "bootstrap/dist/css/bootstrap.min.css"
function Header({address,lastName,loggedIn}) {

  
  return (
    <>
   <Navbar
    className="navbar"
    style={{
          height: 100,
          backgroundColor: "transperent"
         
        }}
        fixed="top"
  >
    <Nav className='NavItem' navbar>
       <NavbarBrand href="/">
      <img
        alt="logo"
        src="./logo-white.png"
        style={{
          height: 75,
          width: 250,
          marginLeft: 100,
          
        }}
      />
    </NavbarBrand>
 

   <NavItem className='NavItem'>
            <h4 style={{
                 marginLeft: 1300,  marginTop:20, color: "white"
    
                     }}>wallet address: {address.slice(0,5)}...</h4>
   </NavItem>
   <NavItem style={{  marginLeft:200,  marginTop:20}} className='NavItem'>
                 <Connect ></Connect>
   </NavItem>
  
   </Nav>
    </Navbar>
    
    <img style={{position: "absolute", zIndex:10,  width:500, marginLeft:1100, marginTop:400, color:"white"}}src="https://uploads-ssl.webflow.com/62ea24c4131e427b9414107c/62f2586b523cfa37f775910a_Title.svg" loading="lazy" alt="Ozgurlugu Hisset"></img>
    <h1 style={{position: "absolute", zIndex:10,   marginLeft:1300, marginTop:700, color:"white"}}>
    Hi {lastName}!</h1>
    <h2 style={{position: "absolute", zIndex:10,   marginLeft:950, marginTop:800, color:"white"}}>
Live the city with BinBin. You no longer
Even traffic can't stop it!</h2>

    <video width="100%" height="100%" loop={true} autoPlay muted style={{position: "relative"}} >
      <source src="./tanıtım.mp4" type="video/mp4"/>
    </video>
  
    </>
  );
}

export default Header;