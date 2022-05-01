import React, { useEffect, useState } from 'react';
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
import { useQuery } from '@apollo/client';
import { QUERY, URL } from 'utilities/constants';

const AnimeList = () => {

    const [animeList, setAnimeList] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [initialPage, setInitialPage] = useState(1);
    const [initialVariable] = useState({
        variables: {
            page: initialPage,
            perPage: 12,
            seasonYear: 2022,
            season: 'SPRING',
            sort: ['POPULARITY_DESC'],
        }
    });

    const AnimeListData = useQuery(QUERY.GET_LIST_ANIME, initialVariable)

    useEffect(() => {
        if(AnimeListData.data) {
            setAnimeList(AnimeListData.data.Page.media);
            setIsLoading(AnimeListData.loading);
            setHasMore(AnimeListData.data.Page.pageInfo.hasNextPage);
            setInitialPage(initialPage + 1);
        } else if (AnimeListData.error) {
            setIsLoading(AnimeListData.loading);
            console.log(AnimeListData.error.networkError.result.errors)
        }
    }, [AnimeListData]);

    const loadMoreData = () => {
        setTimeout(async() => {
            const loadMore = await AnimeListData.fetchMore({
                variables: {
                    page: initialPage,
                    perPage: 12,
                    seasonYear: 2022,
                    season: 'SPRING',
                    sort: ['POPULARITY_DESC'],
                }
            })
            setAnimeList([...animeList, ...loadMore.data.Page.media])
            setHasMore(loadMore.data.Page.pageInfo.hasNextPage);
            setInitialPage(initialPage + 1);
        }, 1000);

    }

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
                        loader={<MikMainContentCardLoader>Loading...</MikMainContentCardLoader>}
                        initialScrollY={600}
                    >
                        { !isLoading && renderCardItems() }
                    </MikOngoingSection>
            </MikMainContent>
        </>
    );
}

export default AnimeList;