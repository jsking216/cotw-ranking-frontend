import React from "react";
import Link from "next/link";
import { ListGroup } from "react-bootstrap";

const EpisodeCard = ({ episode }) => {
  return (
  <ListGroup.Item>
    <Link href={`/episodes/${episode.id}`}>
      <p id="title" className="uk-text-medium">
        {episode.PodcastEpisodeName}
      </p>
    </Link>
  </ListGroup.Item>
  );
};

export default EpisodeCard;