import React from "react";
import { ListGroup } from "react-bootstrap";

const EpisodeCard = ({ episode, review }) => {
  return (
  <ListGroup.Item>
    <a href={`/episodes/${episode.id}`}>
      <p id="title">
        {episode.PodcastEpisodeName}
      </p>
    </a>
    Overall Rating: {Number.parseFloat(review.OverallReviewRating).toFixed(1)}
  </ListGroup.Item>
  );
};

export default EpisodeCard;