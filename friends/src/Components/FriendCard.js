import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import EditFriend from './EditFriend';

import './FriendsList.css';

class FriendCard extends Component {

    deleteFriend = event => {
        event.preventDefault();
        this.props.deleteFriend(this.props.id)
    }

    render() {
        return(
            <div className="friend-card">
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Email: {this.props.email}</p>
                <Link to={`/edit-friend/${this.props.id}`}><button>Edit</button></Link>
                <button onClick={this.deleteFriend}>Delete</button>
                <Route 
                    path="/edit-friend/:id"
                    render={() => <EditFriend 
                    id={this.props.id}
                    updateFriend={this.updateFriend}/>}
                />
            </div>
        )
    }
}

export default FriendCard;