const API_KEY = "bd9ea259";

export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const MOVIE_DETAIL = "MOVIE_DETAIL";
export const REMOVE_FAV = "REMOVE_FAV";
// export const SET_LOADING = "SET_LOADING";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=` + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function setMovieDetail(movie) {
  return { type: MOVIE_DETAIL, payload: movie };
}

export function getDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: MOVIE_DETAIL, payload: json });
      });
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}
