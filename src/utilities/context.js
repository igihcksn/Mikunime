import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';

const MikContext = React.createContext({});

const MikProvider = (props) => {
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

    const AnimeListData = useQuery(QUERY.GET_LIST_ANIME, initialVariable);

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
        }, 2000);
    }

    return (
        <MikContext.Provider value={{
            animeList,
            isLoading,
            hasMore,
            loadMoreData,
        }}>
            {props.children}
        </MikContext.Provider>
    )
};

export {
    MikContext,
    MikProvider,
};
