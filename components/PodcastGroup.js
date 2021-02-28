import React from "react";
import NewCard from './NewCard';
import { Row, CardGroup } from 'react-bootstrap';

const PodcastGroup = ({ podcastsToRender }) => {
  return (
    <Row>
      {podcastsToRender.map((podcast) => 
      (
        <CardGroup>
            <NewCard podcast={podcast} key={podcast.id}></NewCard>
        </CardGroup>
      ))}
    </Row>
  );
};

export default PodcastGroup;