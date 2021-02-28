import React from "react";
import { ListGroup } from "react-bootstrap";
import EpisodeCard from './EpisodeCard';

const PodcastEpisodeList = ({ podcastEpisodes, reviews}) => {
  // order reviews by score
  const order = reviews.sort((a, b) => b.OverallReviewRating - a.OverallReviewRating).map((review) => review.podcast_episode.id);
  const ordered = podcastEpisodes.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  return (
    <>
      <ListGroup>
        {ordered.map((episode) => (<EpisodeCard episode={episode} key={episode.id}></EpisodeCard>))}
      </ListGroup>
    </>
  );
};

export default PodcastEpisodeList;
