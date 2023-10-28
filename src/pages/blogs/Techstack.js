import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
 
  DiBootstrap,
} from "react-icons/di";
import {SiMaterialui} from 'react-icons/si'
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiMaterialUi, SiMariadb } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "space-evenly", paddingBottom: "50px",fontSize:"8rem",display:"flex",flexWrap:'wrap' }}>
      
      
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       
      </Col>
     
      
      
    </Row>
  );
}

export default Techstack;