import React from "react";
import { connect } from "react-redux";
import { getDetail, setMovieDetail } from "../../actions/index";

import "./Movie.css";

const API_KEY = "bd9ea259";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: undefined,
    };
  }

  componentDidMount() {
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.match.params.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ detail: json });
      });
  }

  //   componentDidMount() {
  //     this.props.getMovie(this.props.match.params.id);
  //   }

  //   componentWillUnmount() {
  //     this.props.setMovie({});
  //   }

  render() {
    return (
      <div className="movie-detail">
        {this.state.detail === undefined ? (
          <h1>Cargando...</h1>
        ) : this.state.detail.Error !== undefined ? (
          <h1>No encontramos ese título...</h1>
        ) : (
          <>
            <h1>Detalle de la película</h1>
            <h2>{this.state.detail?.Title || ""}</h2>
            <img src={this.state.detail?.Poster} alt="" />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
  detail: state.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
  setMovie: (movie) => dispatch(setMovieDetail(movie)),
  getMovie: (imdbID) => dispatch(getDetail(imdbID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
