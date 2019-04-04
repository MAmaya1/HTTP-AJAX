import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import FriendCard from './FriendCard';
import NewFriendForm from './NewFriendForm';
import EditFriend from './EditFriend';

class FriendsList extends Component {
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
                console.log(err);
            })
    }

    postNewFriend = friend => {
        axios.post('http://localhost:5000/friends', friend)
            .then(res => {
                this.setState({friendsList: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    updateFriend = (id, updatedFriend) => {
            axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
            .then(res => {
                this.setState({friendsList: res.data})
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
            <div className="friends-list">
                <h1>Friends List</h1>
                {this.state.friendsList.map(friend => (
                    <div className="friend-card" key={friend.id}>
                        <Route
                            exact path="/"
                            render={() =>
                                <FriendCard
                                    id={friend.id}
                                    name={friend.name}
                                    age={friend.age}
                                    email={friend.email}
                                    deleteFriend={this.deleteFriend}
                                />}
                        />
                        <Route 
                            path="/edit-friend/:id"
                            render={() => <EditFriend 
                                id={friend.id}
                                updateFriend={this.updateFriend}/>}
                        />
                    </div>
                ))}
                <NewFriendForm postNewFriend={this.postNewFriend}/>
            </div>
        )
    }
}

export default FriendsList;