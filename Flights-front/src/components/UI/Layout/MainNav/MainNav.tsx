import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RouterNavLink} from 'react-router-dom'

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [login, setLogin] = useState(true);

    const auth = () => setLogin(!login);


    return (
        <div>
            <Navbar light expand="md">
                <NavbarBrand className="text-white" tag={RouterNavLink} to='/'>Flights</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink onClick={auth}
                                     className="text-white" tag={RouterNavLink}
                                     to={login ? '/admin' : '/'}>{login ? 'Login' : 'Logout'}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default MainNav;