import React, { useState } from "react";
import useFetch from "../useCustomHook/useFetch";
import FilmCard from "./FilmCard";
import ModalFilm from "./ModalFilm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Film() {
  const [search, setSearch] = useState("Harry Potter");
  const { response, loading, error, fetchData } = useFetch({
    url: `https://www.omdbapi.com/?apikey=86bc27ee&s=${search}`,
    method: "get",
  });
  const [filmID, setFilmID] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (filmID) => {
    setFilmID(filmID);
    setIsModalOpen(true);
  };
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container" id="search">
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search Films Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </button>
      </form>
      {response &&
        (response.Search ? (
          <div className="film-card-container">
            {response.Search.map((data) => (
              <FilmCard
                Title={data.Title}
                Poster={data.Poster}
                key={data.imdbID}
                imdbID={data.imdbID}
                openModal={openModal}
              />
            ))}
          </div>
        ) : (
          <div className="loading-error-container">
            <h1 className="white">{JSON.stringify(response.Error)}</h1>
          </div>
        ))}
      {error && (
        <div className="loading-error-container">
          <h1 className="white">{JSON.stringify(error.message)}</h1>
        </div>
      )}
      {loading && (
        <div className="loading-error-container">
          <div className="loading white-loading ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {isModalOpen && <ModalFilm closeModal={closeModal} filmID={filmID} />}
    </div>
  );
}

export default React.memo(Film);
