import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Details = ({ Movies, match }) => {
  const Movie = Movies.find(el => el.id === +match.params.id); //   +  replace parseInt()
  // find return an object  not an array
  //if we use filter we have to right Movies.filter(......)[0] ==> this is an object
 
  return (
    <div className="d-flex justify-content-center align-items-center m-2 ">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={Movie.link} className="card-img" alt="200*200" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{Movie.title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">{` date of release :  ${Movie.year}`}</small>
              </p>
              <div>
                <Link className="btn btn-warning" to="/">
                  Retour to Movie-List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Movies: state.Movies
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(Details);
export default DetailsContainer;
