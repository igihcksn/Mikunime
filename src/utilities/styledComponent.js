import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { BASE_COLOR } from './constants';

// Navbar style

export const MikNavbar = styled.nav`
    color: ${BASE_COLOR.WHITE};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-weight: bold;
`;

export const MikNavbarTitle = styled(Link)`
    color: ${BASE_COLOR.WHITE};
    font-family: 'Bangers', cursive;
    font-size: 2rem;
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
    padding: 2rem 6rem;
    color: ${BASE_COLOR.WHITE};
    font-family: 'Gudea', sans-serif;
    background: ${BASE_COLOR.SOFT_RED};  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, ${BASE_COLOR.SOFT_RED}, ${BASE_COLOR.DARK_RED});  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, ${BASE_COLOR.SOFT_RED}, ${BASE_COLOR.DARK_RED}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

export const MikHeaderContent = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MikHeaderContentTitle = styled.h1`
    font-size: 30px;
`;

export const MikHeaderContentDescription = styled.p`
    line-hight: 1;
`;

// Main content style

export const MikMainContent = styled.main`
    margin: 0 2rem;
    padding: 0 2rem 4rem 4rem;
    font-family: 'Gudea', sans-serif;

    @media screen and (max-width: 768px) {
        margin: 0 1.5rem;
        padding: 0 3rem;
    }

    @media screen and (max-width: 428px) {
        margin: 0 .5rem;
        padding: 0 1rem;
    }
`;

export const MikOngoingSection = styled(InfiniteScroll)`
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
    -webkit-transition: width 0.4s 0s linear;
        -moz-transition: width 0.4s 0s linear;
        -o-transition: width 0.4s 0s linear;
        transition: width 0.4s 0s linear;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @-webkit-keyframes fade-in-bottom {
        0% {
          -webkit-transform: translateY(50px);
                  transform: translateY(50px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes fade-in-bottom {
        0% {
          -webkit-transform: translateY(50px);
                  transform: translateY(50px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          opacity: 1;
        }
      }

      -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
      animation: fade-in-bottom 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
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
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 428px) {
        ${props => props.isDetail && 'max-width: 100px'}
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
        font-size: 12px;
    }
`;

export const MikMainContentCardTitle = styled.p`
    color: ${BASE_COLOR.BLACK};
    text-align: center;
    font-weight: bold;

    @media screen and (max-width: 428px) {
        text-align: left;
        font-size: 12px;
    }
`;

export const MikMainContentCardLoader = styled.div`
    grid-column: 2 / 6;

    @media screen and (max-width: 428px) {
        grid-column: 1 / span 3;
    }
`;

// Details style

export const MikMainDetailHeader = styled.div`
    background: url(${props => props.src});
    height: 400px;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 200px;
        background-size: cover;
        background-position: center;
    }
`;

export const MikMainDetailHeaderInnerShadow = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, ${props => props.shadowColor ?? 'rgba(0,0,0,1)'} 125%);
    width: 100%;
    height: 100%;
`;

export const MikMainDetailHeaderBackButton = styled(Link)`
    position: absolute;
    top: 1rem;
    left: 4rem;
    color: ${BASE_COLOR.WHITE};
    font-weight: 700;
    text-decoration: none;

    @media screen and (max-width: 428px) {
        left: 1rem;
    }
`;

export const MikMainDetailBody = styled.div`
    background: #FFFFFF;
    padding: 1rem 4rem;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: 215px auto;

    @media screen and (max-width: 428px) {
        padding: 1rem;
        grid-template-columns: 1fr;
    }
`;

export const MikMainDetailThumbnail = styled.div`
    margin-top: -125px;
    text-align: center;
    z-index: 1;

    @media screen and (max-width: 428px) {
        text-align: left;
        display: grid;
        grid-template-columns: 100px auto;
        grid-gap: 10px;
        align-items: end;
    }
`;

export const MikMainDetailDescriptionTitle = styled.h1`
    font-size: 24px;
`;

export const MikMainDetailDescriptionBody = styled.div`
    height: 150px;
    overflow: auto;
`;

export const MikMainDetailButtonAddCollection = styled.button`
    width: 185px;

    @media screen and (max-width: 428px) {
        width: 100%;
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
