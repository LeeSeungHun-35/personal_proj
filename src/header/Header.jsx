import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='Header'>
            <Link to = '/'> 홈</Link>
            <Link to = '/Sym'>  병명</Link>
        </div>
    )
}

export default Header