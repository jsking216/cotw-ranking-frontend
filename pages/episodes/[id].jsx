import React from "react";
import { fetchAPI } from "../../lib/api";
import ReviewDetails from '../../components/ReviewDetails';
import Layout from '../../components/Layout';
import { Breadcrumb } from 'react-bootstrap'


const EpisodeDetailPage = ({ episode, review }) => {
  console.log
  return (
    <Layout>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/podcasts/${review.podcast.id}`}>{review.podcast.PodcastName}</Breadcrumb.Item>
        <Breadcrumb.Item active>{review.PodcastEpisodeReviewName}</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{review.PodcastEpisodeReviewName}</h1>
      <h3>{review.OverallReviewRating}</h3>
      <p>{review.PodcastEpisodeReviewDescription}</p>
      <ReviewDetails review={review} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const episode = await fetchAPI(`/podcast-episodes/${id}`);
  const review = await fetchAPI(`/podcast-episode-reviews?podcast_episode=${id}`);
  
  return {
    props: { episode, review: {...review[0] } },
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