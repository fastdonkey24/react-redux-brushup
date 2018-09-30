import React, { Component } from 'react';
import './App.css';
import Ninjas from './components/Ninjas';


class App extends Component {
  render() {
    const ninjas = [
      { id : 1, name : "Harry", age : "5"},
      { id : 2, name : "Marry", age : "6"},
      { id : 3, name : "Larry", age : "3"},
      { id : 4, name : "Terry", age : "9"}
    ]
    return (
      <div className="App">
        <h3> Welcome</h3>
        <Ninjas ninjasList={ninjas} />
      </div>
    );
  }
}

export default App;
