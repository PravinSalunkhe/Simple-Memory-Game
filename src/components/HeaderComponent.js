import React , {Component} from 'react';
import {Navbar,NavbarBrand,Nav, NavbarToggler,Collapse,NavItem,Jumbotron, Button, Modal,ModalHeader,ModalBody,Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isNavOpen :false
        };
        this.togglenav = this.togglenav.bind(this);
    }    
    togglenav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render() {
        return (
        <Navbar dark color="primary" expand ="md">
                    <div className="container">
                        <NavbarToggler onClick={this.togglenav} />
                        <Collapse isOpen ={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/rules'><span className="fa fa-gavel fa-lg"></span>Rules of the Game</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
        </Navbar>
        );        
    }        
}

export default Header;
