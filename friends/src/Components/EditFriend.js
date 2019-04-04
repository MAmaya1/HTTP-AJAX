import React, {Component} from 'react';

class EditFriend extends Component {
    constructor(props) {
        console.log(props)
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
        const id = this.props.match.params.id;
        this.props.updateFriend(id, this.state.updatedFriend)
    }
 
    render() {
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
            </form>
        )
    }
}

export default EditFriend;