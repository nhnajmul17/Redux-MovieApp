import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import user from '../../Images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { fetchMovies, fetchShows } from '../../Tools/Redux/Movie/MovieSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const serachText = e => {
        setText(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (text === '') return alert('Please Enter a name')
        dispatch(fetchMovies(text))
        dispatch(fetchShows(text))
        setText('')
    }
    return (
        <div className='header'>
            <div className="name"> <Link to='/'>Movie App</Link>
            </div>

            <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                    <input onChange={serachText} value={text} type="text" className='input' id="" placeholder='Search Your Movie or Series' />
                    <button className='search-btn' type='submit'><FontAwesomeIcon icon={faSearch} /></button>

                </form>
            </div>
            <div>
                <img className='user' src={user} alt="" />
            </div>

        </div>
    );
};

export default Header;