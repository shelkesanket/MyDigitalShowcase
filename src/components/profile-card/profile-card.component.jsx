import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Typist from 'react-typist';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../../assets/home-main.svg'

import profilePic from '../../assets/rushi.jpg';

const ProfileCard = () => {
  const [count, setCount] = useState(0);
  const typedTextBgColor = useColorModeValue('#1da1f2', '#edf2f7');
  const typedTextColor = useColorModeValue('#edf2f7', '#1da1f2');

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '2fr 2fr', lg: '2fr 2fr' }}
      mt={10}
      p={4}
      gridColumnGap={10}
      textAlign={{ base: 'center', md: 'inherit' }}
      style={{marginTop:'0rem'}}
    >
       
       <GridItem paddingTop="20px" alignSelf="center">
        <Text fontSize="2rem" fontWeight="bold">
          Hello !
        </Text>
        {count ? (
          <Typist
            cursor={{ show: false, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
            <span
              style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1da1f2' }}
            >
              I am{' '}
              <span
                style={{
                  backgroundColor: `${typedTextBgColor}`,
                  padding: '4px',
                  borderRadius: '5px',
                  color: `${typedTextColor}`,
                }}
              >
                Rushikesh Pawar
                <Typist.Backspace count={15} delay={1250} />
                Frontend Developer
                <Typist.Backspace count={18} delay={1250} />
               
              </span>
            </span>
          </Typist>
        ) : (
          ''
        )}
       
      </GridItem>
     <GridItem>
     <section style={{marginTop:"-2rem"}}>
      <Container fluid className="home-section" id="home">
       
        
          <Row>
            <Col md={2} style={{ paddingBottom: 2 }}>
              <img src={homeLogo}  alt="home pic" className="img-fluid"  width="600px" height="600px"  style={{marginleft:"10rem"}}/>
            </Col>
          </Row>
      
    
      </Container>
      
    </section>
     </GridItem>
    
      
    </Grid>
  );
};

export default ProfileCard;
