import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

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
                <div className="buttons">
                    <Link to={`/edit-friend/${this.props.id}`}><button>Edit</button></Link>
                    <button onClick={this.deleteFriend}>Delete</button>
                </div>
            </div>
        )
    }
}

export default FriendCard;