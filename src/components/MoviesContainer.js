import React from 'react';
import MoviesList from './MoviesList.js';

class MoviesContainer extends React.Component {
  render() {
    return(
      <div className="movies-container">
        <h1>UK Opening This Week</h1>
        <MoviesList/>
      </div>
    )
  }
}

export default MoviesContainer;
