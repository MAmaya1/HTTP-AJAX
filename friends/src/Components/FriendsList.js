import React from 'react';

import FriendCard from './FriendCard';
import NewFriendForm from './NewFriendForm';

function FriendsList(props) {
    return (
        <div className="friends-list">
            {props.friendsList.map(friend => (    
                <FriendCard
                    key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    deleteFriend={props.deleteFriend}
                />
            ))}
            <NewFriendForm postNewFriend={props.postNewFriend}/>
        </div>
    )
}

export default FriendsList;