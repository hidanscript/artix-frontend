import React from 'react';
import { Badge } from 'react-bootstrap';

export default function PostTags (props) {
  const colors = ['pill-orange', 'pill-green', 'pill-yellow', 'pill-violet'];
  let colorCounter = 0;

  const getNextColor = () => {
    if (colorCounter === colors.length) {
      colorCounter = 0;
      return colors[0];
    }
    const color = colors[colorCounter];
    colorCounter++;
    return color;
  };

  const tags = props.tags.map((tag) => <Badge pill className={`pill-tag ${getNextColor()} text-white`}>{tag}</Badge>);

  return (
    <div className="tag-list">
      {
        tags
      }
    </div>
  );
}