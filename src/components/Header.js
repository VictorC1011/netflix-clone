import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix" />
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://i.pinimg.com/474x/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c--things-to-watch-holiday-baking.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}