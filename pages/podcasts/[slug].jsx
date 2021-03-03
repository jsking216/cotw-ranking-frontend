import React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from '../../components/Layout';
import PodcastEpisodeList from '../../components/PodcastEpisodeList';
import Link from 'next/link';
import { Breadcrumb } from "react-bootstrap";

const PodcastDetailPage = ({ podcast, reviews }) => {
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
    <Layout>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{PodcastName}</Breadcrumb.Item>
      </Breadcrumb>
      <h1>
        <Link href={PodcastUrl}>{PodcastName}</Link>
      </h1>
      <p>{PodcastDescription}</p>
      <PodcastEpisodeList podcastEpisodes={podcast_episodes} reviews={reviews}/>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  const [podcast, reviews] = await Promise.all([fetchAPI(`/podcasts/${slug}`), fetchAPI(`/podcast-episode-reviews?podcast=${slug}`)]);

  return {
    props: { podcast, reviews },
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