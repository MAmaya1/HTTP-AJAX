import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import FriendsList from './Components/FriendsList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Friends List</h1>
        <Route exact path="/" render={() => <FriendsList/>}/>
      </div>
    );
  }
}

export default App;