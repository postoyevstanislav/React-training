import React from 'react'
import {NavLink} from 'react-router-dom'
import './home.css'
const Home = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to ='/'> Home </NavLink></li>
                    <li><NavLink to ='/userslist'> Users List </NavLink></li>
                    <li><NavLink to ='/documentation'> Documents </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;