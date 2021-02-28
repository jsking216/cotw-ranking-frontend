import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { getStrapiMedia } from '../lib/media';

const NewCard = ({ podcast }) => {
  const imageUrl = getStrapiMedia(podcast.image);
  return (
    <Card style={{ width: '18rem' }}>
      <a href={`/podcasts/${podcast.id}`}><Card.Img variant="top" src={imageUrl} /></a>
      <Card.Body>
        <Card.Title>{podcast.PodcastName}</Card.Title>
        <Card.Text>{podcast.PodcastDescription}</Card.Text>
      </Card.Body>
      <Card.Footer><Button variant="primary" href={`/podcasts/${podcast.id}`} block="true">Check it out</Button></Card.Footer>
    </Card>
  );
};

export default NewCard;
