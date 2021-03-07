import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import EpisodeCarousel from './EpisodeCarousel';
import EpisodeItem from './EpisodeItem';
import useToggle from './util/useToggle';

const PodcastEpisodeList = ({ podcastEpisodes, reviews}) => {
  const [showList, toggleList] = useToggle();

  // order reviews by score
  const orderedReviews = reviews.sort((a, b) => b.OverallReviewRating - a.OverallReviewRating);
  const indexForEpisodes= orderedReviews.map((review) => review.podcast_episode.id);
  const orderedEpisodes = podcastEpisodes.sort((a, b) => indexForEpisodes.indexOf(a.id) - indexForEpisodes.indexOf(b.id));

  //const ToggleButton = React.PureComponent(() => (<Button onClick={toggleList} />));
  const buttonText = 'Click to toggle episode list';

  if (showList) {
    return (
      <>
        <Button variant="primary" onClick={toggleList} >{buttonText}</Button>
        <hr />
        <ListGroup>
          {orderedEpisodes.map((episode, index) => (<EpisodeItem episode={episode} review={orderedReviews[index]} key={episode.id} />))}
        </ListGroup>
      </>
    );
  }
  return (
    <>
      <Button variant="primary" onClick={toggleList} >{buttonText}</Button>
      <hr />
      <EpisodeCarousel episodes={orderedEpisodes} reviews={orderedReviews} />
    </>
  );
};

export default PodcastEpisodeList;
