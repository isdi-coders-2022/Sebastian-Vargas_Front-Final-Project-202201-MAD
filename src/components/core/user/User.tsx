
import React from 'react';
import { Link } from 'react-router-dom';

function User(): JSX.Element {
    return (
        <div className='user'>
            <button 
            type='button'
            className="login-button"
          >Login / Register</button>
        </div>
    );
}

export default User;
