import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './components/routes/Home'
import Navbar from './components/views/Navbar'
import Profile from './components/routes/Profile'
import Create from './components/routes/Create'
import Donate from './components/routes/Donate'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Route path='/' render={(props) => <Home {...props} title={'Home'} />} />
          <Route path='/profile/:id' render={(props) => <Profile {...props} title={'Profile'} />} />
          <Route path='/create' render={(props) => <Create {...props} title={'Create'} />} />
          <Route path='/donate' render={(props) => <Donate {...props} title={'Donate'} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
