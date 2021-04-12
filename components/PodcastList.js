import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PodcastGroup from './PodcastGroup';

const podcastsPerRow = 3;
let arrayForHoldingPodcasts = [];

const PodcastList = ({ podcasts }) => {

  const [podcastsToShow, setPodcastsToShow] = useState([]);
  const [next, setNext] = useState(3);
  const showLoadMore = (next < podcasts.length);

  const loopWithSlice = (start, end) => {
    const slicedPodcasts = podcasts.slice(start, end);
    arrayForHoldingPodcasts = [...arrayForHoldingPodcasts, ...slicedPodcasts];
    setPodcastsToShow(arrayForHoldingPodcasts);
  };

  useEffect(() => {
    loopWithSlice(0, podcastsPerRow);
  }, []);

  const handleShowMorepodcasts = () => {
    loopWithSlice(next, next + podcastsPerRow);
    setNext(next + podcastsPerRow);
  };

  return (
    <div>
      <PodcastGroup podcastsToRender={podcastsToShow} />
      {showLoadMore ? <Button onClick={handleShowMorepodcasts}>Load More</Button> : <></>}
    </div>
  );
};

export default PodcastList;
