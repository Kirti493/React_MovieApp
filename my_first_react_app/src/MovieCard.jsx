import React from 'react';

//everything inside here is movie1.
const MovieCard = ({ moviez }) => {
  return (
    <div className='movie'>
      <div>
        <p>{moviez.Year}</p>
      </div>
      <div>
        <img
          src={
            moviez.Poster !== 'N/A'
              ? moviez.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={moviez.Title}
        />
      </div>
      <div>
        <span>{moviez.Type}</span>
        <h3>{moviez.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
