import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand><h1 className="header-title">Trivia Game!</h1></Navbar.Brand>
            </Navbar>
        </header>
    );
};


export default Header;