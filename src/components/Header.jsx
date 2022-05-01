import React from 'react';
import {
    MikHeader,
    MikNavbar,
    MikNavbarList,
    MikNavbarTitle,
} from 'utilities/styledComponent';

const Header = () => {
    return (
        <MikHeader>
            <MikNavbar>
                <MikNavbarTitle to='/'>Mikunime</MikNavbarTitle>
                <div className='menu'>
                    <MikNavbarList to='/collection'>Manga</MikNavbarList>
                    <MikNavbarList to='/collection'>Character</MikNavbarList>
                    <MikNavbarList to='/collection'>Studio</MikNavbarList>
                    <MikNavbarList to='/collection'>Collection</MikNavbarList>
                </div>
            </MikNavbar>

            <h1>The World's Best Anime</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti ab optio nam modi nulla excepturi non esse eaque cum vero, illum vitae sunt dolores culpa. Quasi totam porro reiciendis.</p>

            <form>
                <input type='text' />
                <button type='submit'>Cari</button>
            </form>
        </MikHeader>
    );
};

export default Header;