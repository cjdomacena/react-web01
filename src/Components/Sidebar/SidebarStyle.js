import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position:fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: ${ ({isOpen}) => (isOpen ? '0' : '-100%')};
left: 0;
transition: .5s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
height: 100%;
width: 100%;
color: white;
display: grid;
place-items: center;
`;
export const SidebarMenu = styled.div`
height: 50%;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between

`;

export const SidebarLink = styled(LinkScroll)`
color:white;
font-size: 1.2rem;
text-decoration: none;
padding: .5rem 3rem;
text-align: center;
cursor:pointer;
&:hover
{
    background-color: rgba(255,255,255,.3);
    border-radius: 25px;
}

`;

export const SidebarButtonLink = styled(LinkRouter)`
color:white;
font-size: 1.2rem;
text-decoration: none;
padding: .5rem 3rem;
text-align: center;
cursor:pointer;
background-color: green;
    border-radius: 25px;
&:hover
{
    background-color: rgba(255,255,255,.3);
    border-radius: 25px;
}
`;