import React, { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import SociaLink from '../social-link/social-link.component';
import {FcContacts} from 'react-icons/fc'
import {FaWhatsapp} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'

import {
  FaLinkedin,
  
  FaGithubSquare,
} from 'react-icons/fa';

const socialsInfo = [
  {
    name: 'github',
    socialUrl: 'https://github.com/rushipawarms',
    svgIcon: FaGithubSquare,
    color: 'black',
  },
  {
    name: 'linkedin',
    socialUrl: 'https://www.linkedin.com/in/rushikesh-p-507a99174',
    svgIcon: FaLinkedin,
    color: 'linkedin',
  },

  
];

const Socials = () => {
  const [contact,setcontact]=useState(false);
  let handlecontact=()=>{
    if(contact==false)
    {
      setcontact(true);
    }
    else{
      setcontact(false);
    }
  }
  return (
    <>
    <div style={{display:"flex",maginRight:"1rem"}}>
    <Box style={{marginTop:"-3rem"}} p={4}>
      
      
      <Text fontSize="md" fontWeight="bold">
        You can find me on:
      </Text>

      <br />
      <Flex maxW="150px" justify="space-evenly">
        {socialsInfo.map((socialInfo) => (
          <SociaLink
            key={socialInfo.name}
            color={socialInfo.color}
            socialUrl={socialInfo.socialUrl}
            svgIcon={socialInfo.svgIcon}
          />
        ))}
        <div onClick={handlecontact}>
        <FcContacts style={{fontSize:"2.5rem"}} />
        </div>

      </Flex>
    </Box>
    <Box style={{position:"absolute",bottom:'1.3rem',right:'1rem',fontSize:"13px",fontStyle:'italic'}}>
          {
            contact==true && <><div style={{display:"flex"}}><MdEmail style={{marginTop:'0.3rem'}}/>&nbsp;<h5 >rushikesh.pawarms@gmail.com</h5></div><diV style={{display:"flex"}}><FaWhatsapp style={{marginTop:'0.3rem'}}/>&nbsp;<h5>9763186632</h5></diV></>
          }
    </Box>
    </div>
    </>
  );
};

export default Socials;
