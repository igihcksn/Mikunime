import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { MikMainContent } from 'utilities/styledComponent';
import { QUERY } from 'utilities/constants';

const AnimeDetails = () => {

    const { slug } = useParams();
    const [ animeDetails, setAnimeDetails ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    const AnimeListData = useQuery(QUERY.GET_DETAILS_ANIME, {
        variables: {
            id: slug
        }
    })

    useEffect(() => {
        if (AnimeListData.data) {
            setAnimeDetails(AnimeListData.data.Media);
            setIsLoading(AnimeDetails.loading);
        }
    },[AnimeListData.data]);

    return ( 
        <MikMainContent>
            {
                !isLoading && (
                    <>
                        <img src={animeDetails.coverImage.extraLarge} alt="test" />
                        <p>{animeDetails.title.userPreferred}</p>
                    </>
                )
            }
        </MikMainContent>
    );
}

export default AnimeDetails;