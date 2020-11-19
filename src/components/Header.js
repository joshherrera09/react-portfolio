import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({name, contactEmail}) => {
    return (
        <div>
            <div className="header_container">
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><a href={`mailto:${contactEmail}`} /></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;