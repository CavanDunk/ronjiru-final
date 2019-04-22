import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component imports
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Generate from './components/Generate';
import Profile from './components/Profile';
import Alert from 'react-bootstrap/Alert';

// styling
import './App.css';


class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({loading: false, drizzleState });
      } else if (drizzleState.web3.status === 'failed') {
        this.setState({loading: 'failed'});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading === 'failed') {
      return (
        <div>
          <Router>
            <Alert variant="danger">
              Oops! Something went wrong. Unable to connect to a network.
            </Alert>
          </Router>
        </div>
      );
    } else if (this.state.loading) {
      return (
        <div>
          <Router>
            <Alert variant="primary" >
              <p className="alert-primary">Loading Ronjiru...</p>
            </Alert>
          </Router>
        </div>
      );
    }
    return (
        <Router>
          <HeaderNav />
          <div className='App'>
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/generate' exact={true} component={Generate} />
              <Route path='/profile' exact={true} component={Profile} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
