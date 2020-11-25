import React, { Component } from "react";
import {apiResponse} from "../api"
import DogCard from "../Components/DogCard"

class DogsList extends Component {

  state={
    api: apiResponse,
    
  }

  renderDogs = () => {
    return this.state.api.map(dog => <DogCard key={dog.key} dog={dog} clicked={this.state.clicked}/>)
  }
  render() {
    return <div className="list">{this.renderDogs()}</div>;
  }
}

export default DogsList;
