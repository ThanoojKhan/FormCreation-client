import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/get">GET Method</Link>
                    </li>
                    <li>
                        <Link to="/patch">PATCH Method</Link>
                    </li>
                    <li>
                        <Link to="/put">PUT Method</Link>
                    </li>
                    <li>
                        <Link to="/delete">DELETE Method</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavLinks;