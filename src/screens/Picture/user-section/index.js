import React from 'react';

export default function UserSection (props) {
  return (
    <div className="user-section">
      <div className="user-header">
        <img className="user-avatar" src="https://i1.sndcdn.com/avatars-000293987340-ul92zc-t500x500.jpg" alt="avatar" />
        <div className="user-info">
          <h3 className="font-main text-dark-grey">{props.artist}</h3>
          <h3 className="font-main text-dark-grey font-size-14">1.4k followers</h3>
        </div>
        <div className="follow-button">
          <span className="font-main text-white">
            Follow
          </span>
        </div>
      </div>
      <div className="user-separator" />
      <div className="user-description">
        <p className="font-main text-light-grey font-size-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices non urna in pretium. Duis quis accumsan mi.
        </p>
      </div>
      <div className="prices-button">
        <span className="font-main text-white">
          See prices
        </span>
      </div>
    </div>
  );
}