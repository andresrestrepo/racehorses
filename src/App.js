import React, { Component } from 'react';
import './App.css';
import HorseComponent from './component/HorseComponent';
import SeparatorHorse from './component/SeparatorHorse'
import Header from './component/Header'
import GameStore from './stores/GameStore';
import Positions from './component/Positions';

class App extends Component {

constructor(props){
  super(props);
  this.horse1 = React.createRef();
  this.horse2 = React.createRef();
  this.horse3 = React.createRef();

  this.horses = [this.horse1, this.horse2, this.horse3]
}

  render() {
    return (
      <div className="App">
        <Header store={GameStore} horses={this.horses}></Header>
        <HorseComponent store={GameStore} horse="horse1" ref={this.horse1}></HorseComponent>
        <SeparatorHorse></SeparatorHorse>
        <HorseComponent store={GameStore} horse="horse2" ref={this.horse2}></HorseComponent>
        <SeparatorHorse></SeparatorHorse>
        <HorseComponent store={GameStore} horse="horse3" ref={this.horse3}></HorseComponent>
        <SeparatorHorse></SeparatorHorse>
        <Positions store={GameStore} ></Positions>
      </div>
    );
  }
}

export default App;
