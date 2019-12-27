import "./App.css";

import React from "react";
import Movie_after_filter from "./components/Movie_after_filter";
import RatingFilter from "./components/RatingFilter";
import NameFilter from "./components/NameFilter";
import { connect } from "react-redux";
import DetailsContainer from "./components/Details";
import { Route,Switch } from "react-router-dom";
import PopUpContainer from "./components/PopUp";

function App({ Movies }) {
 
  return (
    <div className="m-0">
      <div className=" d-flex justify-content-around m-0 ">
        <NameFilter />
        <PopUpContainer />
        <RatingFilter/>
      </div>
<Switch>
      <Route exact path="/" component={Movie_after_filter} />
      <Route exact path="/Details/:id" component={DetailsContainer} />
      {/* props.match.params.id */}
</Switch>
      <div className="m-5 "></div>

      <div></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Movies: state.Movies,
    details: state.details
  };
};
const mapDispatchToProps = state => {
  return {};
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
