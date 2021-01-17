import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ podcast }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image image={podcast.image} />
          </div>
          <div className="uk-card-body">
            <p id="title" className="uk-text-medium">
              {podcast.PodcastName}
            </p>
            <Link href={podcast.PodcastUrl}>Listen here</Link>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;