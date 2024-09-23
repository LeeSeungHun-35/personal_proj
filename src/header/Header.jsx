import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='Header'>
            <div className='logo'>질병 예측</div>
            <div className='nav-links'>
                <Link to='/'>홈</Link>
                <Link to='/Sym'>질병 확인</Link>
            </div>
        </nav>
    )
}

export default Header;