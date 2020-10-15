import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav 
    className="navbar navbar-expand-lg navbar-light"
    style={{backgroundColor:'#81B29A'}}
    >
      <Logo/>
      <div 
      className="navbar-brand" 
      to="/"
      style={{
        flex: 1
      }}
      >
      <text style={{        
        fontSize:'80px',
        fontWeight:400,

        marginTop: '50px',
        padding: 0,
        color: '#F4F1DE',
        fontFamily: 'Lobster, cursive',
        textShadow: '3px 3px #3D405B',}}>Richard Antolin</text><br/>
        <text style={{
          marginLeft: '155px',
          padding: 0,
          color: '#F4F1DE',
        }}>Full Stack Web Developer/UX Engineer</text>
      </div>
      

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
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
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
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
