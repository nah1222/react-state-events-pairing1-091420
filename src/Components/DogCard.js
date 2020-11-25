import React, {Component} from "react";

class DogCard extends Component {

  state={
    clicked:false
  }

  clicker  = () => {
    this.setState({clicked:!this.state.clicked})
    console.log(this.state.clicked)
  }
  render(){
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="dog" src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clicker}>Bark</button>
          {this.state.clicked ? <h2>Bark!!!</h2> : null}
        </span>
      </div>
    );
  }
  
}

export default DogCard;