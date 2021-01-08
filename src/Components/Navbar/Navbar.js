import React from 'react';
import { FaBars } from 'react-icons/fa';

import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavTitle,
    NavBtn,
    NavBtnLink
} from './NavbarStyle';
import Logo from '../../images/logo.png';
// import styled from 'styled-components';




const Navbar = () => {
    // const [active, setActive] = useState(false);
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        <img src={ Logo } alt=""/>
                        <NavTitle>
                            <p>Platform of Hope</p>
                            <p>One Family at a Time.</p>
                        </NavTitle>
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" className="active">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" >Discover</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="donate">Donate</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>

    )
}

export default Navbar
