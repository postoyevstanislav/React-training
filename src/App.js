import React from 'react';
import Student from'./students/students'


const studentList = [
    {
        name: 'Stanislav Postoyev',
        age: '27'
    },
    {
        name: 'Kate Samchuk',
        age: '23'
    },
    {
        name: 'Ringo Starr',
        age: '80'
    },
    {
        name: 'Johnny Knoxville',
        age: '49'
    }
]
// in JSX all tags should be closed like <img src='' alt='' /> 
const App = (props) => {
    return ( 
    <div className='red'>
        {studentList.map( student => <Student {...student}/> )}
    </div>
    ) }


    export default App