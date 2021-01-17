import React from "react";
import Link from "next/link";

const EpisodeCard = ({ episode }) => {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-body">
            <p id="title" className="uk-text-medium">
              {episode.PodcastEpisodeName}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default EpisodeCard;