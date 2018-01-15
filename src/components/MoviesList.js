import React from 'react';
import Movie from './Movie.js';

class MoviesList extends React.Component {
  render() {
    return(
      <div className="movies-list">
        <Movie />
      </div>
    )
  }
}

export default MoviesList;
