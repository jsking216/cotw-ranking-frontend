import React from "react";
import { fetchAPI } from "../../lib/api";
import PodcastEpisodeList from '../../components/podcastEpisodeList';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
      <Header />
      <h1>
        <Link href={PodcastUrl}>{PodcastName}</Link>
      </h1>
      <p>{PodcastDescription}</p>
      <PodcastEpisodeList podcastEpisodes={podcast_episodes} />
      <Footer />
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