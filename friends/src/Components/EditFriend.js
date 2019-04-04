import React, {Component} from 'react';

class EditFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    updateValue = event => {
        this.setState({
            updatedFriend:  {
                ...this.state.updatedFriend,
                [event.target.name]: event.target.value
            }
        })
    }

    updateFriend = event => {
        event.preventDefault();
        console.log(this.props.id);
        this.props.updateFriend(this.props.id, this.state.updatedFriend)
    }

    deleteFriend = event => {
        event.preventDefault();
        this.props.deleteFriend(this.props.id)
    }
 
    render() {
        console.log(this.props)
        return (
            <form>
                <h3>Update Friend Info</h3>
                Name: <input
                    type="text"
                    name="name"
                    onChange={this.updateValue}
                />
                Age: <input
                    type="text"
                    name="age"
                    onChange={this.updateValue}
                />
                Email: <input
                    type="text"
                    name="email"
                    onChange={this.updateValue}
                />
                <button onClick={this.updateFriend}>Save</button>
                <button onClick={this.deleteFriend}>Delete</button> {/* Delete friend can go on main friend card instead */}
            </form>
        )
    }
}

export default EditFriend;