import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PostDetails from './components/PostDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Route exact path='/' component={Home} /> */}
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/posts/:post_id' component={PostDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
