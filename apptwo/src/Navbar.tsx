import * as React from "react";
import {Link} from 'react-router-dom'

import {Container,Header,Nav,Overlay,Overlaycontent} from './NavbarStyle'

const NavBar = () => {
    return(
        <>
        <Container>
        <Header>
            <a className="logo" href="/">
            <h1>Logo</h1></a>
            <Nav>
                <ul className="nav_links">
                    <li><Link to='/'>About</Link></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </Nav>
            <a className="cta" href="#">Contact</a>
            <p className="menu cta">Menu</p>
        </Header>
        <Overlay>
            <a className="close">&times;</a>
            <Overlaycontent>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
        
            </Overlaycontent>
        </Overlay>

        </Container>
        </>
    )
}
export default NavBar;



