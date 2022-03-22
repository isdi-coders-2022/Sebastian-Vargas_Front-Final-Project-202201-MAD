import React from 'react';

function Header(): JSX.Element {
    return (
        <header className="App-header">
            <h1>Chips&Drinks</h1>
            <p>This is my final project</p>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <p>Or if you want to procrastinate</p>
            <a
                className="App-link-yt"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Go to YouTube
            </a>
        </header>
    );
}

export default Header;
