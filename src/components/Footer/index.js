import React from "react";
import "./style.css";
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Row from "../Row";
import Col from "../Col";


function Footer() {
  return (
    <footer className="footer">
      <center><span>R.A. Portfolio 2020</span></center>

          <center>
            <LinkedIn 
            style={{
              color: '#DEB841',
              fontSize: '60px',
              margin: 0}}/>
            <GitHub
            style={{
              color: '#DEB841',
              fontSize: '45px',
              margin: 0}}/>
          </center>

    </footer>
  );
}
export default Footer;
