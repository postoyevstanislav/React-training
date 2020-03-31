import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import './users.css'
import Users from './users-view';
import  axios from 'axios'

const usersAPI = `https://test-users-api.herokuapp.com/users/`

// const users = [
//     {"id": "2", "name": "Kostya", "age":17},
//     {"id": "3", "name": "Oleg", "age":22},
//     {"id": "4", "name": "Pasha", "age":11},
//     {"id": "5", "name": "Dima", "age":38}
// ]

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

    editUser = (id) => {
        const user = {
            name: this.state.name,
            age: this.state.age
        }
        axios.put(`https://test-users-api.herokuapp.com/users/${id}`, user)
        .then( res => {
            this.toggleEdit()
        })
        
    }

    deleteUser = (id) => {
        axios.delete(`https://test-users-api.herokuapp.com/users/${id}`)
        .then( res => {
            
        })
    }

    changeName = (event) => {
        const {value} = event.target
        this.setState({name: value})
    }

    changeAge = (event) => {
        const {value} = event.target
        this.setState({age: value})
    }

    render() {
        return (
            <Users.Wrapper>
                { this.state.isEdit ?
                <div>
                <Users.Label>
                    Name: <Users.NameInput value = {this.state.name} onChange={this.changeName} />
                </Users.Label>
                <Users.Label>
                    Age: <Users.AgeInput value = {this.state.age} onChange={this.changeAge} />
                </Users.Label>
                <Users.Button type = 'ADD' onClick = {() => this.editUser(this.props.id)}>Add</Users.Button> 
                </div>

                :

                <div>
                <Users.Name> 
                    <Link to = {`/user/${this.props.id}`}>{this.state.name}</Link> 
                </Users.Name> 
                <Users.Age>Age: {this.state.age}</Users.Age>
                <Users.Button type = 'EDIT' onClick = {this.toggleEdit}>Edit</Users.Button>
                <Users.Button type = 'DELETE'>Delete</Users.Button>
                </div> }
            </Users.Wrapper>
        )
    }
}

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ''
        }
        this.getUsers()
    }

    getUsers = () => {
        axios.get(usersAPI)
        .then(({data}) => {
            this.setState({users: data.data})
            console.log('users: ', data.data)
        })
    }

    render() {
        return( 
        <div>
            {this.state.users ? this.state.users.map(user => 
            <User {...user} key = {user.id} />) : ''}
        </div>
        )
    }
}

export default UsersList