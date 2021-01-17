import React from "react";
import { fetchAPI } from "../../lib/api";
import ReviewDetails from '../../components/ReviewDetails';

const EpisodeDetailPage = ({ episode, review }) => {
  const {
    PodcastEpisodeReviewName,
    OverallReviewRating,
    PodcastEpisodeReviewDescription,
  } = review[0];
  return (
    <>
      <h1>{PodcastEpisodeReviewName}</h1>
      <h3>{OverallReviewRating}</h3>
      <p>{PodcastEpisodeReviewDescription}</p>
      <ReviewDetails review={review[0]} />
    </>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const episode = await fetchAPI(`/podcast-episodes/${id}`);
  const review = await fetchAPI(`/podcast-episode-reviews?podcast_episode=${id}`);
  
  return {
    props: { episode, review },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  // use COUNT API to fetch number of episodes available
  const episodeCount = await fetchAPI('/podcast-episodes/count');
  const paths = Array.from({length: episodeCount}, (_, i) => i + 1).map((item) => ({'params': { 'id': `${item}`} }));

  return {
    paths,
    fallback: false,
  };
}

export default EpisodeDetailPage;