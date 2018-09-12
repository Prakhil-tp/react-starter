import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      click :0
    };
  }
  handleClick = () => {
    let click = this.state.click;
    this.setState({click:click+1});
  }
  render(){
    return(
      <div>
        <h1>react starter</h1>
        <div>
          <button onClick={this.handleClick}>click me</button>
        </div>
        <p>button clicked {this.state.click} times</p>
      </div>
    );
  }
}

export default App;