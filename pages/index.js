import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PodcastList from '../components/podcastList';
import { fetchAPI } from "../lib/api";

const Home = ({ podcasts, homepage }) => {
  return (
    <Layout categories={podcasts}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <h1>{homepage.hero.title}</h1>
        </div>
        <PodcastList podcasts={podcasts} />
      </div>
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