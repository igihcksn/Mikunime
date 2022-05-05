import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BASE_COLOR, URL } from 'utilities/constants';
import { client } from 'utilities';
import NotFound from './NotFound';
import { ApolloProvider } from '@apollo/client';
import { MikProvider } from 'utilities/context';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { Footer } from 'components';
import { MikFallbackSpinner } from 'utilities/styledComponent';

const AnimeDetails = React.lazy(() => import('../anime/AnimeDetails'));
const AnimeList = React.lazy(() => import('../anime/AnimeList'));
const CollectionDetails = React.lazy(() => import('../collections/CollectionDetails'));
const CollectionList = React.lazy(() => import('../collections/CollectionList'));

const MainLayouts = () => {
    return ( 
        <ApolloProvider client={client}>
            <MikProvider>
                <ChakraProvider>
                    <Routes>
                        <Route index element={
                            <Suspense fallback={<MikFallbackSpinner><Spinner color={BASE_COLOR.SOFT_RED} /></MikFallbackSpinner>}>
                                <AnimeList />
                            </Suspense>
                        } />
                        <Route path={URL.ANIME_DETAILS} element={
                            <Suspense fallback={<MikFallbackSpinner><Spinner color={BASE_COLOR.SOFT_RED} /></MikFallbackSpinner>}>
                                <AnimeDetails />
                            </Suspense>
                        } />

                        <Route path={URL.COLLECTION_LIST} element={
                            <Suspense fallback={<MikFallbackSpinner><Spinner color={BASE_COLOR.SOFT_RED} /></MikFallbackSpinner>}>
                                <CollectionList />
                            </Suspense>
                        } />
                        <Route path={URL.COLLECTION_DETAILS} element={
                            <Suspense fallback={<MikFallbackSpinner><Spinner color={BASE_COLOR.SOFT_RED} /></MikFallbackSpinner>}>
                                <CollectionDetails />
                            </Suspense>
                        } />

                        <Route path='*' element={<NotFound />} />
                    </Routes>

                    <Footer>
                        ini footer
                    </Footer>
                </ChakraProvider>
            </MikProvider>
        </ApolloProvider>
    );
}

export default MainLayouts;