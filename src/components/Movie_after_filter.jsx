import React from "react";
import Movie from "./Movie";
import { connect } from "react-redux";

function Movie_after_filter({ Movies = [] }) {
  return (
    <div className="Movie-list d-flex justify-content-center row ">
      {Movies.map((film, i) => (
        <Movie key={i} Film={film} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Movies: state.Movies.filter(
      el =>
        el.title.toLowerCase().includes(state.searchValue.toLowerCase()) &&
        el.rate >= state.rateValue
    )
  };
};

const Movie_after_filterContainer = connect(mapStateToProps)(
  Movie_after_filter
);
export default Movie_after_filterContainer;
