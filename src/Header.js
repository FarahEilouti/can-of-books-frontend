import React from 'react';
import {Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' >
                <Navbar.Brand>My favorite Books</Navbar.Brand>
                <NavItem><Link to='/' className='nav-link' color='white' >Home</Link></NavItem>
                <NavItem><Link to='/profile' className='nav-link' color='white' >profile</Link></NavItem>

            </Navbar>
        )
    }
}

export default Header;