import React from "react";
import { fetchAPI } from "../../lib/api";
import Layout from '../../components/Layout';
import PodcastEpisodeList from '../../components/PodcastEpisodeList';
import RatingChart from '../../components/RatingChart';
import Link from 'next/link';
import NextImage from 'next/image';
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
          <RatingChart chartName={`${PodcastName} - Ratings By Episode`} chartData={reviews.map((review) => { return {x: review.id, y: review.OverallReviewRating}})} />
        </Col>
        <Col xs={12} md={4}>
          <NextImage
            src={googleImage}
            width={125}
            height={125}
            layout="responsive"
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
  const googleImage = await fetch(`http://localhost:3000/api/google-image?keywords=${queried}`);
  const toJson = await googleImage.json();

  return {
    props: { podcast, reviews, googleImage: toJson[0] },
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