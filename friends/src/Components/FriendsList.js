import React, {Component} from 'react';
import axios from 'axios';

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
            <div className="fiends-list">
                {this.state.friendsList.map(friend => (
                    <p key={friend.id}>Name: {friend.name} Age: {friend.age} Email: {friend.email}</p>
                ))}
            </div>
        )
    }
}

export default FriendsList;