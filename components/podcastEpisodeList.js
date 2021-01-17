import React from "react";
import EpisodeCard from './episodeCard';

const PodcastEpisodeList = ({ podcastEpisodes }) => {
  return (
    <>
      {podcastEpisodes.map((episode) => (<EpisodeCard episode={episode} key={episode.id}></EpisodeCard>))}
    </>
  );
};

export default PodcastEpisodeList;
