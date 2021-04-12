import { Card, Button } from 'react-bootstrap';

const EpisodeCard = ({ episode, review }) => {
  return (<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{episode.PodcastEpisodeName}</Card.Title>
    <Card.Text>Overall Rating: {Number.parseFloat(review.OverallReviewRating).toFixed(1)}</Card.Text>
    <Button variant="primary" href={`/episodes/${episode.id}`}>View Rating Details</Button>
  </Card.Body>
</Card>);
};

export default EpisodeCard;