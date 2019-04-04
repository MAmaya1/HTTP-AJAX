import React from 'react';
import {Route, Link} from 'react-router-dom';

import './FriendsList.css';

function FriendCard(props) {
    // const friendId = props.params.match.friendId;
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <Link to={`/edit-friend`}><button>Edit</button></Link>
        </div>
    )
}

export default FriendCard;