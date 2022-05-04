import React, { useContext } from 'react';
import { CardItems, Header } from 'components';
import {
    MikMainContent,
    MikMainContentCardLoader,
    MikOngoingSection,
} from 'utilities/styledComponent';
import { BASE_COLOR } from 'utilities/constants';
import { MikContext } from 'utilities/context';
import { Heading, Spinner } from '@chakra-ui/react';

const AnimeList = () => {

    const {
        animeList,
        isLoading,
        hasMore,
        loadMoreData,
    } = useContext(MikContext);

    return ( 
        <>
            <Header />
            <MikMainContent>
                <Heading as='h3' size='md'>
                    SPRING 2022
                </Heading>
                <MikOngoingSection
                    dataLength={animeList.length || 12}
                    next={loadMoreData}
                    hasMore={hasMore}
                    loader={
                        <MikMainContentCardLoader>
                            <Spinner color={BASE_COLOR.SOFT_RED} />
                        </MikMainContentCardLoader>
                    }
                    initialScrollY={600}
                >
                    { !isLoading && CardItems({ animeList: animeList }) }
                </MikOngoingSection>
            </MikMainContent>
        </>
    );
}

export default AnimeList;