import React from "react";
import useFetch from "../useCustomHook/useFetch";
function ModalFilm({ closeModal, filmID }) {
  const { response, loading } = useFetch({
    url: `https://www.omdbapi.com/?apikey=86bc27ee&i=${filmID}`,
    method: "get",
  });
  return (
    <div className="film-modal-outer" onClick={closeModal}>
      <div className="film-modal-container">
        {response && (
          <div className="film-modal-response">
            <div className="film-modal-title">
              <h3>{response.Title}</h3>
            </div>
            <div className="film-modal-img-container">
              <img src={response.Poster} alt="imagefilm" className="film-modal-img" />
            </div>
            <div className="film-modal-description">
              <table>
                <tbody>
                  <tr>
                    <td>Rated</td>
                    <td>:</td>
                    <td>{response.Rated}</td>
                  </tr>
                  <tr>
                    <td>Released</td>
                    <td>:</td>
                    <td>{response.Released}</td>
                  </tr>
                  <tr>
                    <td>Run time</td>
                    <td>:</td>
                    <td>{response.Runtime}</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td>:</td>
                    <td>{response.Genre}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>:</td>
                    <td>{response.Language}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>:</td>
                    <td>{response.Country}</td>
                  </tr>
                  <tr>
                    <td>Production</td>
                    <td>:</td>
                    <td>{response.Production}</td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>:</td>
                    <td>{response.Director}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td>:</td>
                    <td>{response.Actors}</td>
                  </tr>
                  <tr>
                    <td>Awards</td>
                    <td>:</td>
                    <td>{response.Awards}</td>
                  </tr>
                  <tr>
                    <td>Box Office</td>
                    <td>:</td>
                    <td>{response.BoxOffice}</td>
                  </tr>

                  <tr>
                    <td>DVD</td>
                    <td>:</td>
                    <td>{response.DVD}</td>
                  </tr>

                  <tr>
                    <td>Metascore</td>
                    <td>:</td>
                    <td>{response.Metascore}</td>
                  </tr>
                  <tr>
                    <td>Plot</td>
                    <td>:</td>
                    <td>{response.Plot}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="film-modal-close-button" onClick={closeModal}>
              CLOSE
            </button>
          </div>
        )}
        {loading && (
          <div className="loading-error-container">
            <div className="loading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalFilm;
