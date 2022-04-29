import { MainLogo } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { MikHeader, MikNavbar, MikNavbarList } from 'utilities/styledComponent';

const Header = () => {
    return (
        <MikHeader>
            <MikNavbar>
                <Link to='/'>
                    <img src={MainLogo} alt='Main Logo' />
                </Link>
                <div className='menu'>
                    <MikNavbarList to='/collection'>Manga</MikNavbarList>
                    <MikNavbarList to='/collection'>Character</MikNavbarList>
                    <MikNavbarList to='/collection'>Studio</MikNavbarList>
                    <MikNavbarList to='/collection'>Collection</MikNavbarList>
                </div>
            </MikNavbar>

            <h1>The World's Best Anime</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti ab optio nam modi nulla excepturi non esse eaque cum vero, illum vitae sunt dolores culpa. Quasi totam porro reiciendis.</p>
        </MikHeader>
    );
};

export default Header;