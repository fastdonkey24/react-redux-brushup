import React, { Component } from 'react';
import Gnomes from './components/Gnomes';
import AddGnome from './components/AddGnome';


class App extends Component {
  state = {
    gnomes : [
      { id : 1, name : "Harry", age : 5},
      { id : 2, name : "Marry", age : 6},
      { id : 3, name : "Larry", age : 3},
      { id : 4, name : "Terry", age : 7}
    ]
  }

  addNewGnome = (gnome) => {
    gnome.id = Math.random()
    let originalGnomes = [...this.state.gnomes]
    originalGnomes.push(gnome)
    this.setState({
      gnomes : originalGnomes
    })
  }

  deleteTheGnome = (id) => {
    let gnomes = this.state.gnomes.filter(gnome => {
      return gnome.id !== id
    })
    this.setState({
      gnomes : gnomes
    })
  }

  componentDidMount(){
    console.log("Component Mounted")
  }

  componentDidUpdate(){
    let timeStamp = new Date()
    console.log("Component Updated ", timeStamp)
  }

  render() {

    return (
      <div className="App">
        <h3> Welcome</h3>
        <p> Showing Gnomes with Age > 5</p>
        <AddGnome addGnome={this.addNewGnome}></AddGnome>
        <Gnomes gnomesList={this.state.gnomes} deleteGnome={this.deleteTheGnome}/>
      </div>
    );
  }
}

export default App;
