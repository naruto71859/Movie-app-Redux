import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { ADDMOVIE, ADDLINK, ADDYEAR, ADDRATE, ADDTITLE } from "../Actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class PopUp extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let id = this.props.Movies.length + 1;
    return (
      <div className="m-2">
        <button
          className="btn btn-secondary mb-3   "
          style={{ maxWidth: "28rem", cursor: "pointer" }}
          onClick={this.openModal}
        >
          Add Movie
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal} className="btn btn-danger my-2">
            close
          </button>
          <div>I am a modal</div>
          <form>
            {/* we are using a function created in the parent  thanks to props */}
            <div className="input-group input-group-sm my-1 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Title
                </span>
              </div>
              <input
                type="text"
                placeholder="Title"
                onChange={event => this.props.addTitle(event.target.value)} ////// Title
                value={this.props.title}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="input-group input-group-sm my-1 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text " id="inputGroup-sizing-sm">
                  Year
                </span>
              </div>
              <input
                value={this.props.year}
                type="text"
                className="form-control "
                placeholder="year"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={event => this.props.addYear(event.target.value)} ////// year
              />
            </div>

            <div className={this.props.emptyinputs ? "bg-danger" : ""}>
              {this.props.emptyinputs ? "SOME THING IS MISSNG" : ""}
            </div>
            <span>
              <p className="mt-2">Rating</p>
              <button
                className="btn btn-info mx-1"
                type="button"
                onClick={() => this.props.addRate(1)}
                value="1"
              >
                1
              </button>
              <button
                className="btn btn-info mx-1"
                type="button"
                onClick={() => this.props.addRate(2)}
                value="2"
              >
                2
              </button>
              <button
                className="btn btn-info mx-1"
                type="button"
                onClick={() => this.props.addRate(3)}
                value="3"
              >
                3
              </button>
              <button
                className="btn btn-info mx-1"
                type="button"
                onClick={() => this.props.addRate(4)}
                value="4"
              >
                4
              </button>
              <button
                className="btn btn-info mx-1"
                type="button"
                onClick={() => this.props.addRate(5)}
                value="5"
              >
                5
              </button>
            </span>
            <div className="my-4">
              <input
                className="btn btn-success"
                type="button"
                value="Confirm"
                onClick={() =>
                  this.props.addMovie({
                    title: this.props.title,
                    year: this.props.year,
                    rate: this.props.rate,
                    id: id,
                    details: false
                  })
                } ////// ADD
              />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Movies: state.Movies,

    title: state.title,
    year: state.year,
    rate: state.rate,

    emptyinputs: state.emptyinputs
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: payload => dispatch(ADDMOVIE(payload)),

    addTitle: payload => dispatch(ADDTITLE(payload)),
    addYear: payload => dispatch(ADDYEAR(payload)),
    addLink: payload => dispatch(ADDLINK(payload)),
    addRate: payload => dispatch(ADDRATE(payload))
  };
};
const PopUpContainer = connect(mapStateToProps, mapDispatchToProps)(PopUp);
export default PopUpContainer;
