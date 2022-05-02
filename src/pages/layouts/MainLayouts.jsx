import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimeDetails, AnimeList } from 'pages/anime';
import { CollectionDetails, CollectionList } from 'pages/collections';
import { URL } from 'utilities/constants';
import { client } from 'utilities';
import NotFound from './NotFound';
import { Footer } from 'utilities/styledComponent';
import { ApolloProvider } from '@apollo/client';
import { MikProvider } from 'utilities/context';

const MainLayouts = () => {
    return ( 
        <ApolloProvider client={client}>
            <MikProvider>
                <Routes>
                    <Route index element={<AnimeList />} />
                    <Route path={URL.ANIME_DETAILS} element={<AnimeDetails />} />

                    <Route path={URL.COLLECTION_LIST} element={<CollectionList />} />
                    <Route path={URL.COLLECTION_DETAILS} element={<CollectionDetails />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>

                <Footer>
                    ini footer
                </Footer>
            </MikProvider>
        </ApolloProvider>
    );
}

export default MainLayouts;