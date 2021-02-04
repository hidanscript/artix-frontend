import React, { useState } from "react";
import ExploreSection from './explore-section';
import FilterSection from './filters-section';

export default function MainSection() {
  const [ enableNsfw, setNsfw ] = useState(false);

  const applyFilters = (params) => {
    setNsfw(params.enableNsfw);
  };

  return (
    <div className="main-section">
      <div className="column-1">
        <ExploreSection nsfw={enableNsfw} />
      </div>
      <div className="column-2">
        <FilterSection applyFilters={applyFilters} />
      </div>
    </div>
  );
}
