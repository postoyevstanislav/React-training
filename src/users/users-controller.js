import React, {Component} from 'react';
// import './users.css'
import Users from './users-view'

const users = [
    {"id": "1", "name": "TEST", "age":123},
    {"id": "2", "name": "Kostya", "age":17},
    {"id": "3", "name": "Oleg", "age":22},
    {"id": "4", "name": "Pasha", "age":11},
    {"id": "5", "name": "Dima", "age":38}
]

class User extends Component {
    //добавляємо name i age в state для можливості подальшої зміни, оскількі ці дані 
    //знаходяться в props
    state = {
        name: this.props.name || '',
        age: this.props.age || '',
        isEdit: false
    }

    toggleEdit = () => {
        this.setState({isEdit: !this.state.isEdit})
    }
    render() {
        return (
            <Users.Wrapper>
                {this.state.isEdit ?
                <Users.Button type = 'ADD'>Add</Users.Button> :
                <div>
                <Users.Name>{this.state.name}</Users.Name>
                <Users.Age>Age: {this.state.age}</Users.Age>
                <Users.Button type = 'EDIT' onClick = {this.toggleEdit}>Edit</Users.Button>
                <Users.Button type = 'DELETE'>Delete</Users.Button>
                </div>}
            </Users.Wrapper>
        )
    }
}

class UsersList extends Component {

    render() {
        return( 
        <div>
            { users.map(user => <User {...user} />)}
        </div>
        )
    }
}

export default UsersList