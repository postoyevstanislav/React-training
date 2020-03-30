import React from 'react'
import {NavLink} from 'react-router-dom'
import './home.css'
const Home = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to ='/'> Головна </NavLink></li>
                    <li><NavLink to ='/userslist'> Список юзерів </NavLink></li>
                    <li><NavLink to ='/documentation'> Документація </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;