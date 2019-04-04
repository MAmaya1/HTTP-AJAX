import React, {Component} from 'react';

class NewFriendForm extends Component {
    constructor() {
        super();
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    updateValue = event => {
        this.setState({
            newFriend:  {
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }

    postNewFriend = event => {
        event.preventDefault();
        this.props.postNewFriend(this.state.newFriend);
    }

    render() {
        return (
            <form>
                <h2>Add a New Friend</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.updateValue}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={this.updateValue}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.updateValue}
                />
                <button onClick={this.postNewFriend}>Submit</button>
            </form>
        )
    }
}

export default NewFriendForm;