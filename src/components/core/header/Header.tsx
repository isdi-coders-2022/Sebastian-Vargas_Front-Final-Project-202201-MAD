import React from 'react';
import { Link } from 'react-router-dom';
import User from '../user/User';

function Header(): JSX.Element {
    return (
        <header className="header">
            <h1>ChipsDrinks</h1>
            <User/>
        </header>
    );
}

export default Header;
