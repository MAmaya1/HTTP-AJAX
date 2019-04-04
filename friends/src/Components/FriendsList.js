import React, {Component} from 'react';
import axios from 'axios';

import FriendCard from './FriendCard';
import NewFriendForm from './NewFriendForm';

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
                {this.state.friendsList.map(friend => (
                    <FriendCard
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                        updateFriend={this.updateFriend}
                        deleteFriend={this.deleteFriend}
                    />
                ))}
                <NewFriendForm postNewFriend={this.postNewFriend}/>
            </div>
        )
    }
}

export default FriendsList;