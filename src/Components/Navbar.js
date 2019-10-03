import React from 'react';
import { Link } from 'react-router-dom';
//import reactlogo from '../react.png';

const Navbar = ()=>{
    return (
        <nav className = "nav-wrapper blue darken-3">
            <div className="nav-wrapper">
                <Link to ="#">React-App</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                    <li><Link to="/albums">Albums</Link></li>
                    <li><Link to="/photos">Photos</Link></li>
                    <li><Link to="/users">Users</Link></li>       
                </ul>
            </div>
        </nav>    
    )
}

export default Navbar