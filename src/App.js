import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './components/routes/Home'
import Navbar from './components/views/Navbar'
import Profile from './components/routes/Profile'
import Create from './components/routes/Create'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Route exact={true} path='/' render={(props) => <Home {...props} title={'Home'} />} />
          <Route path='/profile/:id' render={(props) => <Profile {...props} title={'Profile'} />} />
          <Route path='/create' render={(props) => <Create {...props} title={'Create'} />} />

          {/* <Route path="/login" render={() => <Login baseUrl={config.url} />} /> */}
          {/* <Route path="/implicit/callback" component={ImplicitCallback} /> */}
          {/* <Route path="/signup" component={SignupForm} /> */}
          {/* <SecureRoute path="/profile" component={Profile} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
