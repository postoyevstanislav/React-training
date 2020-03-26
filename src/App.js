import React from 'react';
// import Post from './students/Post'
import UserList from './users/users-controller'
// import Student from'./students/students'


// const studentList = [
//     {
//         name: 'Stanislav Postoyev',
//         age: '27'
//     },
//     {
//         name: 'Kate Samchuk',
//         age: '23'
//     },
//     {
//         name: 'Ringo Starr',
//         age: '80'
//     },
//     {
//         name: 'Johnny Knoxville',
//         age: '49'
//     }
// ]
// in JSX all tags should be closed like <img src='' alt='' /> 

// const post = {
//     author: 'Yevheniia Kyryliuk',
//     title: 'Lecture #29: React app (styled-components)',
//     image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/05/styled.png'
// }

const App = (props) => {
    return ( 
    // <div className='red'>
    //     {studentList.map( student => <Student {...student}/> )}
    // </div>

    // <div>
    //     <Post {...post}/>
    // </div>
    
    <div>
        <UserList />
    </div> ) }


    export default App