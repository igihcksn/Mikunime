import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { BASE_COLOR } from './constants';

// Navbar style

export const MikNavbar = styled.nav`
    color: ${BASE_COLOR.WHITE};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
`;

export const MikNavbarList = styled(Link)`
    text-decoration: none;
    color: ${BASE_COLOR.WHITE};
    text-transform: uppercase;
    padding: 1rem 2rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

// Header style

export const MikHeader = styled.header`
    height: 60vh;
    text-align: center;
    padding: 1rem 2rem;
    color: ${BASE_COLOR.WHITE};
`;

// Main content style

export const MikMainContent = styled.main`
    padding: 1rem 2rem;
`;


// Footer style

export const Footer = styled.footer`
    width: 100%;
    color: ${BASE_COLOR.WHITE};
    text-align: center;
    background: ${BASE_COLOR.BLACK};
    position: fixed;
    bottom: 0;
`;
