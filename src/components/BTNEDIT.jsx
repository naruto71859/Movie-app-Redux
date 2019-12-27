import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { EDITMOVIE, ADDLINK, ADDYEAR, ADDRATE, ADDTITLE } from "../Actions";

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

class BTNEDIT extends React.Component {
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
    return (
      <div>
        <button className="btn btn-success" onClick={this.openModal}>
          EDIT
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input
              placeholder="Title"
              onChange={event => this.props.addTitle(event.target.value)} ////// Title
            value={this.props.title}
/>
            {/* we are using a function created in the parent  thanks to props */}
            <input
              placeholder="year"
              onChange={event => this.props.addYear(event.target.value)} ////// year
              value={this.props.year}
            />
            <span className="">
              {" "}
              <p className="mt-2">Rating</p>
              <button
                className="btn-info"
                type="button"
                onClick={() => this.props.addRate(1)}
                value="1"
              >
                1
              </button>
              <button
                className="btn-info"
                type="button"
                onClick={() => this.props.addRate(2)}
                value="2"
              >
                2
              </button>
              <button
                className="btn-info"
                type="button"
                onClick={() => this.props.addRate(3)}
                value="3"
              >
                3
              </button>
              <button
                className="btn-info"
                type="button"
                onClick={() => this.props.addRate(4)}
                value="4"
              >
                4
              </button>
              <button
                className="btn-info"
                type="button"
                onClick={() => this.props.addRate(5)}
                value="5"
              >
                5
              </button>
            </span>
            <input
              type="button"
              value="Confirm"
              onClick={() =>{
                this.props.editMovie({
                  title: this.props.title,
                  year: this.props.year,
                  rate: this.props.rate,
                  id: this.props.Movie.id
                }) ; this.closeModal() }
              } ////// ADD
            />
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
    rate: state.rate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editMovie: payload => dispatch(EDITMOVIE(payload)),

    addTitle: payload => dispatch(ADDTITLE(payload)),
    addYear: payload => dispatch(ADDYEAR(payload)),
    addLink: payload => dispatch(ADDLINK(payload)),
    addRate: payload => dispatch(ADDRATE(payload))
  };
};
const BTNEDITContainer = connect(mapStateToProps, mapDispatchToProps)(BTNEDIT);
export default BTNEDITContainer;
