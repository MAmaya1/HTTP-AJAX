import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import FriendsList from './Components/FriendsList';
import EditFriend from './Components/EditFriend';

import './index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({friendsList: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  postNewFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({friendsList: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = (id, updateFriend) => {
    axios.put(`http://localhost:5000/friends/${id}`, updateFriend)
      .then(res => {
        this.setState({friendsList: res.data})
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({friendsList: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="page-wrapper">
        <h1>Friends List</h1>
        <Route 
          exact path="/" 
          render={() => 
            <FriendsList
              friendsList={this.state.friendsList}
              postNewFriend={this.postNewFriend}
              deleteFriend={this.deleteFriend}
            />}
        />
        <Route
          path="/edit-friend/:id"
          render={props => 
            <EditFriend
              {...props}
              updateFriend={this.updateFriend}
            />}
        />
      </div>
    );
  }
}

export default App;