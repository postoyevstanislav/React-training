import React, {Component} from 'react';
// import './users.css'
import Users from './users-view'


class UsersList extends Component {

    render() {
        return(
            <Users.Wrapper>
                <div>Name</div>
                <div>Age</div>
                <button>Edit</button>
                <button>Delete</button>
            </Users.Wrapper>
        )
    }
}

export default UsersList