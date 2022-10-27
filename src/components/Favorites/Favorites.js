import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFav } from "../../actions";
import { Link } from 'react-router-dom';
import "./Favorites.css";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";


export class ConnectedList extends Component {

  movieIsFavorite(imdbID) {
    return this.props.favorites.find((fav) => fav.id === imdbID) ? true : false;
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favorites.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button
                onClick={() =>
                  this.props.remove(movie.id)
                }
              >
                {this.movieIsFavorite(movie.id) ? (
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
  favorites: state.moviesFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeFav(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
