import React from "react";
import Card from './Card';

const PodcastList = ({ podcasts }) => {

  return (
    <>
      {podcasts.map((podcast) => (<Card podcast={podcast} key={podcast.id}></Card>))}
    </>
  );
};

export default PodcastList;
