import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Nav';
import Axios from 'axios';
import UserSection from './user-section';
import PostTags from '../../components/PostTags';

export default function Picture (props) {
  const [ image, setImage ] = useState({});
  
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get('http://127.0.0.1:8080/api/posts/' + id).then((response) => {
      console.log(response.data.post);
      setImage(response.data.post);
    });
  }, []);

  return (
    <div className="picture-page">
      <Navigation enableSearch={true} />
      <div className="picture-section">
        <div className="post">
          <img className="post-picture" src={image.url} />
          <h3 className="font-main text-dark-grey mt-2">{image.title}</h3>
          <div className="separator" />
          <p className="font-main text-light-grey description">{image.description}</p>
          <PostTags tags={['NSFW', 'Evelynn', 'League of Legends', 'Hentai']} />
        </div>
        <UserSection artist={image.artist} />
      </div>
    </div>
  );
};