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
    height: 40vh;
    text-align: center;
    padding: 1rem 2rem;
    color: ${BASE_COLOR.WHITE};
`;

// Main content style

export const MikMainContent = styled.main`
    margin: 0 2rem;
    padding: 2rem 4rem;
    color: ${BASE_COLOR.WHITE}

    @media screen and (max-width: 768px) {
        margin: 0 1.5rem;
        padding: 0 3rem;
    }

    @media screen and (max-width: 428px) {
        margin: 0 1rem;
        padding: 0 1rem;
    }
`;

export const MikOngoingSection = styled.section`
    display: grid;
    grid-template-columns: repeat(6, minmax(0px, 1fr));
    gap: 20px;
    justify-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(4, minmax(0px, 1fr));
        gap: 20px;
    }

    @media screen and (max-width: 428px) {
        grid-template-columns: repeat(3, minmax(0px, 1fr));
        gap: 20px;
    }
`;

export const MikMainContentCardLink = styled(Link)`
    width: 185px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const MikMainContentCardList = styled.div`
    width: 185px;
    text-align: center;
    margin: auto;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

export const MikMainContentCardImgBox = styled.img`
    width: 185px;
    height: 265px;
    border-radius: 5px;
    box-shadow: 0 14px 30px rgba(var(--color-shadow-blue),.15),0 4px 4px rgba(var(--color-shadow-blue),.05);

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const MikMainContentCardRatingBox = styled.div`
    position: absolute;
    bottom: .2rem;
    right: 0;
    color: ${BASE_COLOR.BLACK};
    text-decoration: none;
    background: ${props => props.color ?? BASE_COLOR.BLACK};
    padding: .5rem;
    border-radius: 5px 0px 5px 0px;

    @media screen and (max-width: 428px) {
        padding: .1rem;
    }
`;

export const MikMainContentCardTitle = styled.p`
    color: ${BASE_COLOR.WHITE};
    text-align: center;

    @media screen and (max-width: 428px) {
        text-align: left;
        font-size: 12px;
    }
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
