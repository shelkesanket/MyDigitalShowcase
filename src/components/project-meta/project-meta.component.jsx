import React from 'react';
import { GoLink, GoMarkGithub, GoStar, GoRepoForked } from 'react-icons/go';
import { Grid, GridItem, Badge } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';

const ProjectMeta = ({ projectMeta }) => {
  const {
    language,
    stargazers_count,
    forks_count,
    html_url,
    homepage,
  } = projectMeta;

  return (
    <GridItem alignSelf="end">
      <Grid templateColumns="150.4fr 1.6fr">
       
        <GridItem justifySelf="end">
          <a href={html_url} target="_blank" rel="noreferrer">
            <Icon as={GoMarkGithub} style={{    fontSize: "1.5rem"}} />
          </a>
          {homepage ? (
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: '6px' }}
            >
              <Icon as={GoLink} style={{    fontSize: "1.5rem"}}/>
            </a>
          ) : null}
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default ProjectMeta;
