import React from "react";
import NewCard from './NewCard';
import { Row, Col, CardGroup } from 'react-bootstrap';

const PodcastGroup = ({ podcastsToRender }) => {
  return (
    <Row>
      {podcastsToRender.map((podcast) => 
      (
        <CardGroup>
          <Col xs="12" md="6" lg="4">
            <NewCard podcast={podcast} key={podcast.id}></NewCard>
          </Col>
        </CardGroup>
      ))}
    </Row>
  );
};

export default PodcastGroup;