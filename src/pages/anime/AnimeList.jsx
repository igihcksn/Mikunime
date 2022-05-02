import React, { useContext } from 'react';
import { Header } from 'components';
import {
    MikMainContent,
    MikMainContentCardImgBox,
    MikMainContentCardLink,
    MikMainContentCardList,
    MikMainContentCardLoader,
    MikMainContentCardRatingBox,
    MikMainContentCardTitle,
    MikOngoingSection,
} from 'utilities/styledComponent';
import { BASE_COLOR, URL } from 'utilities/constants';
import LoadingSpin from 'react-loading-spin';
import { MikContext } from 'utilities/context';

const AnimeList = () => {

    const {
        animeList,
        isLoading,
        hasMore,
        loadMoreData,
    } = useContext(MikContext);

    const renderCardItems = () => animeList.map(anime => (
        <MikMainContentCardLink to={URL.ANIME_DETAILS.replace(':slug', anime.id)} key={anime.id}>
            <MikMainContentCardList>
                <MikMainContentCardImgBox 
                    src={anime.coverImage.extraLarge}
                    alt={anime.title.romaji}
                    loading='lazy' />
                <MikMainContentCardRatingBox color={anime.coverImage.color}>Rating: {anime.averageScore ?? 0}</MikMainContentCardRatingBox>
            </MikMainContentCardList>
            <MikMainContentCardTitle>{anime.title.romaji}</MikMainContentCardTitle>
        </MikMainContentCardLink>
    ));

    return ( 
        <>
            <Header />
            <MikMainContent>
                <h3>SPRING 2022</h3>
                    <MikOngoingSection
                        dataLength={animeList.length || 12}
                        next={loadMoreData}
                        hasMore={hasMore}
                        loader={
                            <MikMainContentCardLoader>
                                <LoadingSpin
                                    duration="2s"
                                    size={40}
                                    primaryColor={BASE_COLOR.SOFT_RED}
                                />
                            </MikMainContentCardLoader>
                        }
                        initialScrollY={600}
                    >
                        { !isLoading && renderCardItems() }
                    </MikOngoingSection>
            </MikMainContent>
        </>
    );
}

export default AnimeList;