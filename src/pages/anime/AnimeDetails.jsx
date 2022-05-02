import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { MikMainContentCardImgBox, MikMainDetailBody, MikMainDetailButtonAddCollection, MikMainDetailDescriptionBody, MikMainDetailDescriptionTitle, MikMainDetailHeader, MikMainDetailHeaderBackButton, MikMainDetailHeaderInnerShadow, MikMainDetailThumbnail, MikNavbarList } from 'utilities/styledComponent';
import { QUERY } from 'utilities/constants';
import parse from 'html-react-parser';

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
        <>
            {
                !isLoading && (
                    <>
                        <MikMainDetailHeader src={animeDetails.bannerImage}>
                            <MikMainDetailHeaderBackButton to='/'>Back to Home</MikMainDetailHeaderBackButton>
                            <MikMainDetailHeaderInnerShadow shadowColor={animeDetails.coverImage.color} />
                        </MikMainDetailHeader>
                        {/* <MikMainContent isDetail> */}
                            <MikMainDetailBody>
                                <MikMainDetailThumbnail>
                                    <MikMainContentCardImgBox isDetail src={animeDetails.coverImage.extraLarge} alt="test" />
                                    <MikMainDetailButtonAddCollection>Add to collection</MikMainDetailButtonAddCollection>
                                </MikMainDetailThumbnail>
                                <div>
                                    <MikMainDetailDescriptionTitle>{animeDetails.title.userPreferred}</MikMainDetailDescriptionTitle>
                                    <MikMainDetailDescriptionBody>{parse(animeDetails.description)}</MikMainDetailDescriptionBody>
                                    {/* <MikNavbarList to='/collection'>Manga</MikNavbarList>
                                    <MikNavbarList to='/collection'>Character</MikNavbarList>
                                    <MikNavbarList to='/collection'>Studio</MikNavbarList>
                                    <MikNavbarList to='/collection'>Collection</MikNavbarList> */}
                                </div>
                            </MikMainDetailBody>
                        {/* </MikMainContent> */}
                    </>
                )
            }
        </>
    );
}

export default AnimeDetails;