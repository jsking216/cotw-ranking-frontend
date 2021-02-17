import React from "react";
import { ListGroup } from "react-bootstrap";
import EpisodeCard from './episodeCard';

const PodcastEpisodeList = ({ podcastEpisodes }) => {
  return (
    <>
      <ListGroup>
        {podcastEpisodes.map((episode) => (<EpisodeCard episode={episode} key={episode.id}></EpisodeCard>))}
      </ListGroup>
    </>
  );
};

export default PodcastEpisodeList;
