import React from 'react'; 
import {Link} from 'react-router-dom'
import Image from "../home-page.jpg"; 


const Home = () => {
    return (
        <div className = "home" >
            <h1>Bad Jokes App</h1>
            <h2>All the worst jokes all in one place! Register or Login to  get your daily dose of laughter. </h2>
            <div className = "links">
                <Link to = "/register">Register</Link>
                <Link to = "/login">Login</Link>
            </div>
        </div>
    )
}

export default Home; 