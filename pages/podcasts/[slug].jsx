import React from "react";
import { fetchAPI } from "../../lib/api";
import PodcastEpisodeList from '../../components/podcastEpisodeList';

const PodcastDetailPage = ({ podcast }) => {
  const {
    PodcastName,
    PodcastDescription,
    PodcastUrl,
    published_at,
    created_at,
    updated_at,
    image,
    podcast_episodes,
   } = podcast;
  return (
    <>
      <h1>{PodcastName}</h1>
      <h3>{PodcastUrl}</h3>
      <p>{PodcastDescription}</p>
      <PodcastEpisodeList podcastEpisodes={podcast_episodes} />
    </>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  const podcast = await fetchAPI(`/podcasts/${slug}`);

  return {
    props: { podcast },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  // use COUNT API to fetch number of podcasts available
  const podcastCount = await fetchAPI('/podcasts/count');
  const paths = Array.from({length: podcastCount}, (_, i) => i + 1).map((item) => ({'params': { 'slug': `${item}`} }));

  return {
    paths,
    fallback: false,
  };
}

export default PodcastDetailPage;