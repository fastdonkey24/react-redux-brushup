import React, { Component } from 'react';
import './App.css';
import Gnomes from './components/Gnomes';


class App extends Component {
  render() {
    const gnomes = [
      { id : 1, name : "Harry", age : "5"},
      { id : 2, name : "Marry", age : "6"},
      { id : 3, name : "Larry", age : "3"},
      { id : 4, name : "Terry", age : "9"}
    ]
    return (
      <div className="App">
        <h3> Welcome</h3>
        <Gnomes gnomesList={gnomes} />
      </div>
    );
  }
}

export default App;
