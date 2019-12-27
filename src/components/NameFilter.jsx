import React from "react";
import { connect } from "react-redux";
import { SEARCH } from "../Actions";

function TitleFilter({ onTextchange = () => {} }) {
  return (
    <form className="form-inline md-form form-sm mt-0 col-6">
      <i className="fas fa-search col-6" aria-hidden="true"></i>
      <input
        className="form-control form-control-sm  ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={event => onTextchange(event.target.value)}
        // value={searchValue} // we can remove it
      />
    </form>
  );
}
const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTextchange: payload => dispatch(SEARCH(payload))
  };
};

const TitleFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleFilter);
export default TitleFilterContainer;
