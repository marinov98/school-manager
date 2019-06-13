import React, { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk } from "../../actions/campusActions";

class EditCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: "1",
            Address: "",
            Name: "",
            Description: "",
            ImageURL: ""
        };
        this.initialState = this.state;
    }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
      event.preventDefault();
      // if (
      //     this.state.Name !== this.initialState.Name &&
      //     this.state.Address !== this.initialState.Address &&
      //    // this.state.Description !== this.initialState.Description &&
      //     //this.state.ImageURL !== this.initialState.ImageURL
      // ) {
          let editedCampus = {
              Id: this.state.Id,
              Name: this.state.Name,
              Address: this.state.Address,
             Description: this.state.Description,
              ImageURL: this.state.ImageURL
          };
          this.props.editCampus(editedCampus);

      //}
  };
  handleClick = () =>{
      let editedCampus = {
          Id: this.initialState.Id,
          Name: this.initialState.Name,
          Address: this.initialState.Address,
         Description: this.initialState.Description,
          ImageURL: this.initialState.ImageURL
      }
      this.props.editCampus(editedCampus);
  }


  render() {
    return(
        <div>
            <form>
                <label>
                    Campus Name:
                    <input
                        type="text"
                        name="Name"
                        placeholder="Campus Name"
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <label>
                    Campus Address:
                    <input
                        type="text"
                        name="Address"
                        placeholder="Campus Address"
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <label>
                    Campus: Description
                    <input
                        type="text"
                        name="Description"
                        placeholder="Campus Description"
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <label>
                    Image Url:
                    <input
                        type="text"
                        name="ImageURL"
                        placeholder="Campus Image"
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <input
                    type="submit"
                    onClick={this.handleSubmit}
                    value="Save"
            />
                <button onClick={this.handleClick}>Cancel</button>
            </form>

        </div>
    )
  }
}

const mapStateToProps = state => ({
    campus: state.campus
});

const mapDispatchToProps = dispatch => {
  return {
    editCampus: editedCampus => dispatch(editCampusThunk(editedCampus))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (EditCampus);
