import React from "react";
import Rating from "./Rating";
import { connect } from 'react-redux'
import { RATEFILTER } from "../Actions";


function RatingFilter({ minRating, newList = () => {} }) { 
// when using redux  we just declare 'minRating' here and use it in the redux and
// for the child Rating
 
return (
    <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      <Rating
        onChangeRating={Newlist => {newList(Newlist) }} // information passe du child vers le parent à travers des function avec des paramétre
        rate={minRating}
      />
    </div>
  );
}
const mapStateToProps = state => { 
  return {
    minRating : state.rateValue
  }
} 
const mapDispatchToProps = dispatch => { 
  return {
    
    newList :  payload => dispatch  ( RATEFILTER (payload))
  }
}
const RatingFilterContainer = connect ( mapStateToProps, mapDispatchToProps) (RatingFilter)
export default RatingFilterContainer