import React, {Component} from 'react';
import axios from 'axios';

import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friendsList: [],
            successMessage: 'New friend added!',

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

    render() {
        return (
            <div className="friends-list">
                <h1>Friends List</h1>
                {this.state.friendsList.map(friend => (
                    <Friend 
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                    />
                ))}
                <NewFriendForm postNewFriend={this.postNewFriend}/>
            </div>
        )
    }
}

export default FriendsList;