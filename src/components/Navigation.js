import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navigation extends Component {
    state = {
        on: false
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Home  
                    </Link>
                    <Link className="navbar-brand" to="/contact">
                        Contact
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Navigation;
