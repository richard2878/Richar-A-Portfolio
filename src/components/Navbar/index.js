import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav 
    className="navbar navbar-expand-lg navbar-light"
    style={{backgroundColor:'#BFBDC1'}}
    >
      <Logo style={{
        flex: 1,
        padding: 0,
        height: '80px',
      }}/>
      <div 
      className="navbar-brand" 
      to="/"
      style={{
        flex: 1,
        padding: 'none',
        height: '160px',
        marginTop: 0,
      }}
      >
      <text style={{  
        flex: 1,      
        fontSize:'90px',
        fontWeight:400,
        padding: '10px',
        color: '#6D6A75',
        fontFamily: 'Source Sans Pro, sans-serif',
        textShadow: '3px 3px WHITE',}}>Richard Antolin</text><br/>
        <text style={{
          marginTop: '100px',
          color: '#37323E',
          marginLeft: '15px',
          fontSize:'20px',
          textShadow: '2px 2px #white',
          flex: 1,
        }}>Full Stack Web Developer/UX Engineer</text>
      </div>
      

      <div>
        <ul className="navbar-nav"
            style={{
              marginLeft: "17px",
              marginTop: "30px",
            }}
                      >
          <li className="nav-item"
          >
            <Link
              className= "Iconbuttons"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                fontWeight:400,
                color: "white",
                backgroundColor: '#DE9E36',
                borderRadius: '8px 0px 8px 0px',
                boxShadow: '3px 3px',
                textAlign: 'center',
                width: '120px',
                padding: '10px',
                marginRight: '40px',
                marginTop: '40px'
              
              }}
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                fontWeight:400,
                color: "white",
                backgroundColor: '#DE9E36',
                borderRadius: '8px 0px 8px 0px',
                boxShadow: '3px 3px',
                textAlign: 'center',
                width: '120px',
                marginRight: '40px',
                marginTop: '40px'
              }}
              
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1px',
                fontWeight:400,
                color: "white"
              }}
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
