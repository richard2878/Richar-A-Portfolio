import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div style={{
      justifyContent: 'center',
      dislay: 'flex',
      alignItems: 'center'
      }}>
      <Hero backgroundImage="https://github.com/richard2878/Richar-A-Portfolio/blob/main/src/images/Hero%20Image.jpg?raw=true">
      <center><Row>
          <Col size="md6">
            <h3 style={{
                marginTop: '100px', 
                marginLeft: '100px', 
                padding: '10px', 
                color:'#DEB841'}}>Language</h3>
          <ul style={{ 
                marginLeft: '100px', 
                color:'white', 
                padding:0}}>
            <li>CSS</li>
            <li>HTML</li>
            <li>JAVASCRIPT</li>
          </ul>
          </Col>

          <Col size="md6">
            <h3 style={{marginTop: '100px', 
                marginLeft: '100px', 
                padding: '10px', 
                color:'#DEB841'}}>Design Tools</h3>
          <ul style={{ marginLeft: '100px', color:'white', padding:0}}>
            <li>ADOBE CREATIVE SUITE</li>
            <li>GOOGLE FONTS</li>
            <li>MATERIAL UI</li>
            <li>BOOTSTRAP</li>
            <li>FIGMA</li>
          </ul>
          </Col>

        </Row></center>
      </Hero>
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to my portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style={{
              justifySelf: 'left'
            }}>
              My name is Richard Antolin, I am a designer with an background in architecture.  I have learned early on that tools must function in way that humans feel comfortable when using them. 
              Otherwise they will find other tools that will make the job easier to perform.  As a designer, I have responsibilty to provide products that are ageless and long lasting. Wether that is through
              the Apps I've built or the buildings that I have designed, the result should always be that "Form follows Function."  
              It took a while but I finally decided that I would persue my second career as a Full Stack Developer/UX Engineer. Fast forward, four months later, I have completed a Coding Bootcamp course at
              UCLA Extension, gained knowledge and learned to love the technicalities of coding. I always knew that I can mix my background in design with building web applications as I have always been interested in figuring out how to make the web experience be more functional and enjoyable.
              Please click on my portfolio and see some of the apps I have built through my journey as a coder.  Thanks for visiting.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
