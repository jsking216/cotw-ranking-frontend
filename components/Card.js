import React from "react";
import Link from "next/link";
import Image from "./Image";

const Card = ({ podcast }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`}>
      <a>
        <div>
          <h3 id="title">
            {podcast.PodcastName}
          </h3>
        </div>
        <div>
          <Image image={podcast.image} />
        </div>
        <Link href={podcast.PodcastUrl}>Listen Here</Link>
      </a>
    </Link>
  );
};

export default Card;