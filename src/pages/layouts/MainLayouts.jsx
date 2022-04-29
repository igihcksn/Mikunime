import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimeDetails, AnimeList } from 'pages/anime';
import { CollectionDetails, CollectionList } from 'pages/collections';
import { URL } from 'utilities/constants';
import NotFound from './NotFound';

const MainLayouts = () => {
    return ( 
        <>
            <nav>
                ini nav
            </nav>
            <main>
                <Routes>
                    <Route index element={<AnimeList />} />
                    <Route path={URL.ANIME_DETAILS} element={<AnimeDetails />} />

                    <Route path={URL.COLLECTION_LIST} element={<CollectionList />} />
                    <Route path={URL.COLLECTION_DETAILS} element={<CollectionDetails />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <footer>
                ini footer
            </footer>
        </>
    );
}

export default MainLayouts;