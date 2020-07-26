import React, {Component} from 'react'

class SingleUser extends Component {
    constructor(props) {
    super(props)
    this.state = {
        userInfo: ''
    }
    this.getUser()
    }

    async getUser() {
        const { id }  = this.props.match.params
        console.log('id: ', this.props.match.params)
        const response = await fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        const data = await response.json()
        console.log('your name: ',data.data.name)
        this.setState({userInfo: data.data})
    }

    render() {
        return (
        <div>
            <h4>Name: {this.state.userInfo.name}</h4>
            <h4>Age: {this.state.userInfo.age}</h4>
        </div>
        )
    }
}

export default SingleUser