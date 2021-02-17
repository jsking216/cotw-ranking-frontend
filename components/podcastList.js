import React from "react";
import Card from './card';

const PodcastList = ({ podcasts }) => {

  return (
    <>
      {podcasts.map((podcast) => (<Card podcast={podcast} key={podcast.id}></Card>))}
    </>
  );
};

export default PodcastList;
