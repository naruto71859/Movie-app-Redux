import React from "react";
import Rating from "./Rating";
import { connect } from "react-redux";
import {
  EDITMOVIE,
  DELETEMOVIE,
  ADDLINK,
  ADDYEAR,
  ADDRATE,
  ADDTITLE,
  SETDETAILS
} from "../Actions";
import BTNEDIT from "./BTNEDIT";
import { Link } from "react-router-dom";

//Film: is an object that contain n properties called ....

function Movie({ Film = {}, onDelete = () => {} }) {
  // destroying methode react le 2eme Film est l'objet par defaut

  const {
    title = "No Title added ",
    link = "http://tny.im/kdS",
    year = "",
    rate = 0,
    id = 0
  } = Film;
  // this is an exemple of those line in more easiest way const {exp} = exp
  // creation d'un objet qui contien les meme props que Film q'on va l'utilise comme objet par defaut
  // si l'utilisateur de fait pas entrer le titre ou l'url d'un film

  // ★ ☆

  return (
    <div
      className="card col-lg-4 d-flex  m-2"
      style={{ maxWidth: "28rem", minHeight: "45rem" }}
    >
      <div className="card-header my-1 bg-info d-flex justify-content-around ">
        <Rating rate={rate} />
        <BTNEDIT Movie={Film}>Edit</BTNEDIT>
        <button className="btn btn-danger col-3" onClick={() => onDelete(id)}>
          delete
        </button>
      </div>
      <span style={{ height: "550px" }}>
        <img
          src={link}
          alt="200*200"
          width="350px"
          height="550px"
          className="card-img-top"
        />
      </span>
      <div className={"card-header "}>
        <h5 className="card-title">{title}</h5>
        <span className="d-flex justify-content-between">
          <span className="card-text">{year}</span>
          <Link to={`/Details/${id}`} className={"btn btn-secondary"}>
            DETAILS
          </Link>
        </span>
      </div>

      <div></div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    title: state.title,
    year: state.year,
    rate: state.rate,

    details: state.details
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: payload => dispatch(DELETEMOVIE(payload)),
    onEdit: payload => dispatch(EDITMOVIE(payload)),

    addTitle: payload => dispatch(ADDTITLE(payload)),
    addYear: payload => dispatch(ADDYEAR(payload)),
    addLink: payload => dispatch(ADDLINK(payload)),
    addRate: payload => dispatch(ADDRATE(payload)),

    set_details: payload => dispatch(SETDETAILS(payload))
  };
};

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie);
export default MovieContainer;
