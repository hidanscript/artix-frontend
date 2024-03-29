import React from "react";
import { Link } from 'react-router-dom';

export default function ArtCard(props) {
  return (
    <Link to={ '/post/' + props.id }>
      <div className="artcard">
        <img src={props.image} />
        <div className="data">
          <span className="artcard-title text-white font-main">{props.title}</span>
          <div className="artcard-separator"></div>
          <span className="text-white font-main">{props.artist}</span>
          <div className="stats"></div>
        </div>
      </div>
    </Link>
  );
}
