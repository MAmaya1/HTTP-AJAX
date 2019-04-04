import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import EditFriend from './EditFriend';

import './FriendsList.css';

class FriendCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="friend-card">
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Email: {this.props.email}</p>
                <Link to="/edit-friend"><button>Edit</button></Link>
                <Route 
                    path="/edit-friend"
                    render={() => <EditFriend 
                        id={this.props.id}
                        updateFriend={this.props.updateFriend}
                        />}
                />
            </div>
        )
    } 
}

export default FriendCard;