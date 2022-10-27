import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  movieIsFavorite(imdbID) {
    return this.props.favorites.find((fav) => fav.id === imdbID) ? true : false;
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies.map((movie) => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button className="buttonFavorite"
                onClick={() =>
                  this.props.addMovieFavorite({
                    title: movie.Title,
                    id: movie.imdbID,
                  })
                }
              >
                {this.movieIsFavorite(movie.imdbID) ? (
                  <RiHeartFill />
                ) : (
                  <RiHeartAddLine />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
  favorites: state.moviesFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (title) => dispatch(getMovies(title)),
  addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
