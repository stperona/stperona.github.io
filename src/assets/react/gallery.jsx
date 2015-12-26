'use strict';

import React from 'react';

class Gallery extends React.Component {
  render() {
    return <div>
      <div className="row column">
        <h3>{this.props.heading}</h3>
      </div>
      <div className="row small-up-1 medium-up-3 large-up-6">
        <div className="column">
          <img src="//placehold.it/300x300" className="thumbnail" alt="" />
        </div>
        <div className="column">
          <img src="//placehold.it/300x300" className="thumbnail" alt="" />
        </div>
        <div className="column">
          <img src="//placehold.it/300x300" className="thumbnail" alt="" />
        </div>
        <div className="column">
          <img src="//placehold.it/300x300" className="thumbnail" alt="" />
        </div>
        <div className="column">
          <img src="//placehold.it/300x300" className="thumbnail" alt="" />
        </div>
        <div className="column">
          <img src="//placehold.it/300x300" className="thumbnail" alt="" />
        </div>
      </div>
    </div>;
  }
}

export default Gallery;
