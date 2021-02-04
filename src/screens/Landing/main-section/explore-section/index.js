import React, { useEffect, useState } from "react";
import ArtCard from '../../../../components/ArtCard';
import Axios from 'axios';
import { Spinner } from 'react-bootstrap';
// PptrqvCEvpLfzvuhZ5yXRwyC	
export default function ExploreSection(props) {
  const [ images, setImages ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:8080/api/posts?nsfw=" + props.nsfw).then(response => {
      setImages([...response.data.posts]);
      setLoading(false);
    });
  }, [props.nsfw]);

  const goToPost = (postId) => {
    alert(postId);
  };
  if (isLoading) {
    return (
      <div className="explore-section-loading">
        <Spinner animation="border" variant="primary spinner-purple" />
      </div>
    );
  } else {
    return (
      <div className="explore-section">
        { images.map((post, index) => {
            return <ArtCard image={post.url} title={post.title} onClick={() => goToPost(post.id)} artist={post.artist} key={index} />
          })}
      </div>
    );
  }
}
