import React, {useState} from 'react';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';

const Header = (props = {}) => {
    return (
        <div className={'header'}>
            <div>Header</div>
            {props.children}
        </div>
    );
};

const Footer = (props = {}) => {
    return (
        <div className={'footer'}>
            <div>Footer</div>
            {props.children}
        </div>
    );
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkProps = {
        exact: true,
        className: 'nav-link'
    };

    return (
        <Navbar color="light" light expand="md">
            <Link to={'/'} className={'navbar-brand'}>React-Tutorial</Link>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to={'/about'} {...linkProps}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/shop'} {...linkProps}>
                            Shop
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export {Header, Footer, Navigation};