import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components'

// component imports
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Generate from './components/Generate';
import Profile from './components/Profile';
import Alert from 'react-bootstrap/Alert';

// styling
import './App.css';
import GenerateAvatar from "./contracts/GenerateAvatar";


class App extends Component {

  render() {
      const options = {
          contracts: [GenerateAvatar],
          web3: {
              fallback: {
                  type: "ws",
                  url: "",
              },
          },
      };
      return (
        <DrizzleProvider options={options}>
            <LoadingContainer>
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
            </LoadingContainer>
        </DrizzleProvider>

      );
  }
}

export default App;
