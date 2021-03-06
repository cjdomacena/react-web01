import React from 'react';
import {SidebarContainer,
     Icon, 
     CloseIcon,
     SidebarWrapper,
     SidebarLink,
     SidebarMenu,
     SidebarButtonLink
    } from './SidebarStyle';

const SideBar = ({handleClick, isOpen}) => {
    
    return (
        <SidebarContainer isOpen={isOpen} onClick={handleClick}>
            <Icon onClick={handleClick}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home">Home</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarButtonLink to="/">Donate</SidebarButtonLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
