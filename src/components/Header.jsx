import React from 'react';
import { Button, IconButton, Input, InputGroup, InputRightElement, Menu, MenuItem } from '@chakra-ui/react';
import {
    MikHeader,
    MikHeaderContent,
    MikHeaderContentDescription,
    MikHeaderContentTitle,
    MikNavbar,
    MikNavbarList,
    MikNavbarMenuButton,
    MikNavbarMenuList,
    MikNavbarTitle,
} from 'utilities/styledComponent';
import { HamburgerIcon } from '@chakra-ui/icons';
import CustomBreadCrumb from './Breadcrumb';

const Header = ({
    isFrom = 'homepage',
    customTitle = null,
    navigations = null,
}) => {

    const handleSearchAnime = () => {
        console.log('cari')
    }

    const renderDefaultHeader = () => (
        <>
            <MikHeaderContentTitle>The World's Best Anime</MikHeaderContentTitle>
            <MikHeaderContentDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti ab optio nam modi nulla excepturi non esse eaque cum vero, illum vitae sunt dolores culpa. Quasi totam porro reiciendis.</MikHeaderContentDescription>

            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleSearchAnime}>
                        Cari
                    </Button>
                </InputRightElement>
            </InputGroup>
        </>
    )

    const renderCollectionPage = () => (
        <>
            <MikHeaderContentTitle>{customTitle ?? 'Find your collection here'}</MikHeaderContentTitle>
            <CustomBreadCrumb navigations={navigations} />
        </>
    )

    return (
        <MikHeader>
            <MikNavbar>
                <MikNavbarTitle to='/'>Mikunime</MikNavbarTitle>
                <div className='menu'>
                    <MikNavbarList to='/collection'>Manga</MikNavbarList>
                    <MikNavbarList to='/collection'>Character</MikNavbarList>
                    <MikNavbarList to='/collection'>Studio</MikNavbarList>
                    <MikNavbarList to='/collection'>Collection</MikNavbarList>

                    <Menu>
                        <MikNavbarMenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MikNavbarMenuList>
                            <MenuItem>Manga</MenuItem>
                            <MenuItem>Character</MenuItem>
                            <MenuItem>Studio</MenuItem>
                        </MikNavbarMenuList>
                    </Menu>
                </div>
            </MikNavbar>

            <MikHeaderContent isCollection={isFrom === 'collection'}>
                { isFrom === 'homepage' && renderDefaultHeader() }
                { isFrom === 'collection' && renderCollectionPage() }
            </MikHeaderContent>
        </MikHeader>
    );
};

export default Header;