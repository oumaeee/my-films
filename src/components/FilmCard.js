import React from "react";

function FilmCard({ Poster, Title, imdbID, openModal }) {
  return (
    <div className="film-card" onClick={() => openModal(imdbID)}>
      <div className="film-card-img-container">
        <img src={Poster} alt="imageFilm" className="film-card-img" />
      </div>
      <div className="film-card-description">
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default React.memo(FilmCard);
