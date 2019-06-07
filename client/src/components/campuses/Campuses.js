import React, { Component } from 'react';

class Campuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedSearch: "false",
            search: "",
            allCampuses: [{ "Name": "Hunter College", "Location": "Manhattan" }, { "Name": "Baruch College", "Location": "Manhattan" }, { "Name": "Queens College", "Location": "Queens" }],
            filteredCampuses: [],
            newCampusName: "",
            newCampusLocation: ""
        }
    }

    addCampus = () => {
        let newCampusArray = this.state.allCampuses.slice();
        let newCampus = {};
        newCampus.Name = this.state.newCampusName;
        newCampus.Location = this.state.newCampusLocation;
        newCampusArray.push(newCampus);
        this.setState({
            allCampuses: newCampusArray
        })
    }

    searchCampus = () => {
        let targetLocation = this.state.search;
        let newCampusArray = this.state.allCampuses.filter(campus => targetLocation.includes(campus.Location));
        this.setState({
            clickedSearch: "true",
            filteredCampuses: newCampusArray
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    viewAll = () => {
        this.setState({
            clickedSearch: "false",
        })
    }

    displayCampuses = () => {
        if (this.state.clickedSearch === "true") {
            let displayCampuses = this.state.filteredCampuses.map((element) =>
                <li key={element.Name}>
                    <p>Campus Name: {element.Name}</p>
                    <p>Campus Location: {element.Location}</p>
                </li>
            );
            return <div>
                {displayCampuses}
            </div>
        }
        else {
            let displayCampuses = this.state.allCampuses.map((element) =>
                <li key={element.Name}>
                    <p>Campus Name: {element.Name}</p>
                    <p>Campus Location: {element.Location}</p>
                </li>
            );
            return <div>
                {displayCampuses}
            </div>
        }
    }

    render() {
        return <div className="AllCampusTable">
            <h1>All Campuses</h1>
            <form>
                <label> Search for:
                    <input type="text" name="search" value={this.state.search} onChange={this.handleChange.bind(this)} />
                </label>
            </form>
            <button onClick={this.searchCampus}> Search </button>
            <button onClick={this.viewAll}> View All Campuses </button>
            <div> {this.displayCampuses()} </div>

            <form>
                <label> Campus Name:
                    <input type="text" name="newCampusName" value={this.state.newCampusName} onChange={this.handleChange.bind(this)} />
                </label>
                <label> Campus Location:
                    <input type="text" name="newCampusLocation" value={this.state.newCampusLocation} onChange={this.handleChange.bind(this)} />
                </label>
            </form>
            <button onClick={this.addCampus}> Add Campus </button>
        </div>
    }
};

export default Campuses;
