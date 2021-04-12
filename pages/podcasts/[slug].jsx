import React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from '../../components/Layout';
import PodcastEpisodeList from '../../components/PodcastEpisodeList';
import RatingChart from '../../components/RatingChart';
import Link from 'next/link';
import { Breadcrumb, Row, Col } from "react-bootstrap";

const PodcastDetailPage = ({ podcast, reviews, googleImage }) => {
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
      <Row>
        <Col xs={12} md={8}>
          <RatingChart chartName={`${PodcastName} - Ratings By Episode`} chartData={reviews.map((review) => { return {x: review.id, y: review.OverallReviewRating, name: review.PodcastEpisodeReviewName}})} />
        </Col>
        <Col xs={12} md={4}>
          Possibly Related Image
          <img
            src={googleImage}
            width={125}
            height={125}
          />
        </Col>
      </Row>
      <PodcastEpisodeList podcastEpisodes={podcast_episodes} reviews={reviews}/>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  const [podcast, reviews] = await Promise.all([fetchAPI(`/podcasts/${slug}`), fetchAPI(`/podcast-episode-reviews?podcast=${slug}`)]);
  const queried = podcast.PodcastDescription.split(' ').join('&keywords=').slice(0, 50);

  return {
    props: { podcast, reviews, googleImage: 'https://via.placeholder.com/300x300.png?text=PoddyRater+Placeholder' },
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