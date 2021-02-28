import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { getStrapiMedia } from '../lib/media';

const NewCard = ({ podcast }) => {
  const imageUrl = getStrapiMedia(podcast.image);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{podcast.PodcastName}</Card.Title>
        <Card.Text>{podcast.description}</Card.Text>
      </Card.Body>
      <Card.Footer><Button variant="primary">Go somewhere</Button></Card.Footer>
    </Card>
  );
};

export default NewCard;
