import React, {Component} from 'react';
import axios from 'axios';

import Friend from './Friend';

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
            </div>
        )
    }
}

export default FriendsList;