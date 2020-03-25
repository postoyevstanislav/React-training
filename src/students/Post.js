import React, {Component} from 'react'; 
// імпоpтуємо Component для наслідування у класі Post
//setState приймає object || func


class Post extends Component {
    constructor(props){
        super(props)
        // this.props = props
        // props - не змінні данні, які призначені тільки для зчитування!!!
        // state - данні які змінюються!!!

        this.state = {
            likes: 0
        }
        this.addLikes = this.addLikes.bind(this)
    }

    addLikes() {
        // return this.setState(this.state, () => this.state.likes++)
     }

    render() {
        return (
        <div>
            <h4>Post</h4>
            <p>{this.props.author}</p>
            <h5>{this.props.title}</h5>
            <img width='300px' src = {this.props.image} alt = '' /> <br />
            <button onClick = {this.addLikes}>Like</button>
        <div>Likes: {this.state.likes}</div>
        </div>
        )
    }
}

export default Post

// Parent ====to====> Child