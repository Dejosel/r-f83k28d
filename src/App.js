import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor (){
		super()
		this.state = {
			contador:0
		}
	}
	aumentar (){
		this.setState({contador:this.state.contador+1});
	}
  render() {
    return (
      <div>
        <span className="value">{this.state.contador}</span>
        <button id="inc" onClick={this.aumentar.bind(this)} value="Incrementar">Incrementa</button>
      </div>
    );
  }
}

export default App;
