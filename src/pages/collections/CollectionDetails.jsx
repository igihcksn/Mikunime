import React from 'react';
import { useLocation } from 'react-router-dom';
import { CardItems, Header } from 'components';
import { MikMainContent, MikOngoingSection } from 'utilities/styledComponent';
import { URL } from 'utilities/constants';

const CollectionDetails = () => {

    const { state } = useLocation();
    const { list, name } = state;

    return ( 
        <>
            <Header 
                isFrom='collection' 
                customTitle={`Collection: ${name}`} 
                navigations={[
                    { link: URL.HOMEPAGE, name: 'home', isLastChild: false },
                    { link: URL.COLLECTION_LIST, name: 'collection', isLastChild: false },
                    { link: URL.COLLECTION_DETAILS.replace(':slug', name), name: name, isLastChild: true },
                ]} />
            <MikMainContent>
                <MikOngoingSection 
                    dataLength={list.length || 0}>
                    { list.length > 0 && CardItems({ animeList: list }) }
                </MikOngoingSection>
                { !list.length && (
                    <p>Data not found</p>
                ) }
            </MikMainContent>
        </>
    );
}

export default CollectionDetails;