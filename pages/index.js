import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PodcastList from '../components/podcastList';
import { fetchAPI } from "../lib/api";

const Home = ({ podcasts, homepage }) => {
  return (
    <Layout categories={podcasts}>
      <Seo seo={homepage.seo} />
      <h1>{homepage.hero.title}</h1>
      <PodcastList podcasts={podcasts} />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [podcasts, homepage] = await Promise.all([
    fetchAPI("/podcasts"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { podcasts, homepage },
    revalidate: 60,
  };
}

export default Home;