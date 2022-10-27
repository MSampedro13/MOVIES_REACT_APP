import { useSelector } from "react-redux";

export function useCountMoviesFavorites() {
  const favorites = useSelector((state) => state.moviesFavorites);
  return {countFav: favorites?.length || 0};
}
