import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from './Aboutcard';
import laptopImg from '../../assets/about.svg'
import Toolstack from "./Toolstack";


function About() {
  return (
    <Container fluid className="about-section">
   
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '2rem',
    fontFamily: 'monospace',
    marginTop:'-2rem'}}>
               <strong className="purple">Working Experince</strong>
            </h1>
            <Aboutcard />
          </Col>
       
        </Row>
        <h1 className="project-heading" style={{ fontSize: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '2rem',
    fontFamily: 'monospace'}}>
          <strong className="purple"> Professional Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" style={{ fontSize: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '2rem',
    fontFamily: 'monospace'}}>
          <strong className="purple">Tools I use</strong> 
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
  );
}

export default About;