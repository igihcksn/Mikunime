import React, { useEffect, useState } from 'react';
import { Header } from 'components';
import { MikMainContent, MikMainContentCardImgBox, MikMainContentCardLink, MikMainContentCardList, MikMainContentCardRatingBox, MikMainContentCardTitle, MikOngoingSection } from 'utilities/styledComponent';
import { useQuery } from '@apollo/client';
import { QUERY, URL } from 'utilities/constants';

const AnimeList = () => {

    const [animeList, setAnimeList] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const AnimeListData = useQuery(QUERY.GET_LIST_ANIME, {
        variables: {
            page: 1,
            perPage: 12,
            seasonYear: 2022,
            season: 'SPRING',
            sort: ['POPULARITY_DESC'],
        }
    })

    useEffect(() => {
        if(AnimeListData.data) {
            setAnimeList(AnimeListData.data.Page);
            setIsLoading(AnimeListData.loading);
        } else if (AnimeListData.error) {
            setIsLoading(AnimeListData.loading);
            console.log(AnimeListData.error.networkError.result.errors)
        }
    }, [AnimeListData]);

    return ( 
        <>
            <Header />
            <MikMainContent>
                <h3>SPRING 2022</h3>
                <MikOngoingSection>
                    {
                        !isLoading && animeList.media.map(anime => (
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
                        ))
                    }

                    {
                        isLoading && (
                            <p>Loading ...</p>
                        )
                    }
                </MikOngoingSection>
            </MikMainContent>
        </>
    );
}

export default AnimeList;