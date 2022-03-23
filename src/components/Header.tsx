import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
    return (
        <header className="App-header">
            <Link to="/home">
                <h1>Chips&Drinks</h1>
            </Link>
        </header>
    );
}

export default Header;
