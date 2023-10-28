import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
 
  SiNetlify,
  SiHeroku,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{display:'flex', fontSize:"8rem",flexWrap:"Wrap", justifyContent: 'space-evenly', paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ marginBlock: '1rem'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ marginBlock: '1rem'}}  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{ marginBlock: '1rem'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku style={{ marginBlock: '1rem'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify style={{ marginBlock: '1rem'}}  />
      </Col>
    </Row>
  );
}

export default Toolstack;