import EpisodeCard from './EpisodeCard';
import Carousel from "react-multi-carousel";
import styles from './EpisodeCarousel.module.css';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const EpisodeCarousel = ({ episodes, reviews }) => {
  let autoplay = true;
  if (typeof window !== 'undefined') {
    autoplay = (typeof window.orientation === "undefined") || (navigator.userAgent.indexOf('IEMobile') === -1);
  }
  return (
  <Carousel
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={autoplay}
    autoPlaySpeed={15000}
    keyBoardControl={true}
    transitionDuration={500}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    className={styles['carousel-margin']}
    centerMode={!autoplay}
    renderDotsOutside={true}
  >
    {episodes.map((episode, index) => {return (<div key={episode.id}><EpisodeCard episode={episode} review={reviews[index]} key={episode.id} /></div>)})}
  </Carousel>);
};

export default EpisodeCarousel;
