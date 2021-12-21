import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import user from '../../Images/user.png'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'> <div className="name"> Movie App
            </div> </Link>
            <div>
                <img className='user' src={user} alt="" />
            </div>

        </div>
    );
};

export default Header;