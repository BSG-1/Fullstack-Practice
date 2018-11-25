import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/Create';
import Index from './components/Index';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/boostrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome to React Express Tutorial</h2>
          <ul>
            <li><Link to={'/create'}>Create</Link></li>
            <li><Link to={'/index'}>Index</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route exact path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
