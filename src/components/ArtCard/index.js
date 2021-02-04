import React from "react";

export default function ArtCard(props) {
  return (
    <div className="artcard" onClick={props.onClick}>
      <img src={props.image} />
      <div className="data">
        <span className="artcard-title text-white font-main">{props.title}</span>
        <div className="artcard-separator"></div>
        <span className="text-white font-main">{props.artist}</span>
        <div className="stats">
        </div>
      </div>
    </div>
  );
}
