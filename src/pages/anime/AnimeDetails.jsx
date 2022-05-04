import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
    MikMainContentCardImgBox,
    MikMainDetailBox,
    MikMainDetailButtonAddCollection,
    MikMainDetailDescriptionBody,
    MikMainDetailDescriptionTitle,
    MikMainDetailHeader,
    MikMainDetailHeaderBackButton,
    MikMainDetailHeaderInnerShadow,
    MikMainDetailThumbnail
} from 'utilities/styledComponent';
import { QUERY } from 'utilities/constants';
import parse from 'html-react-parser';
import { ChevronLeftIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Button, FormControl, FormLabel, Select, useToast } from '@chakra-ui/react';
import { MikContext } from 'utilities/context';
import { MikModalCustom } from 'components';

const AnimeDetails = () => {

    const {
        collectionList,
        finalRef,
        initialRef,
        handleSelectedCollection,
        handleAddAnimeToCollection,
        modalDisclosure,
        selectedCollection,
    } = useContext(MikContext);
    const { slug } = useParams();
    const [ animeDetails, setAnimeDetails ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    const AnimeListData = useQuery(QUERY.GET_DETAILS_ANIME, {
        variables: {
            id: slug
        }
    })

    const toast = useToast();

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
                            <MikMainDetailHeaderBackButton to='/'><ChevronLeftIcon /> Back to Home</MikMainDetailHeaderBackButton>
                            <MikMainDetailHeaderInnerShadow shadowColor={animeDetails.coverImage.color} />
                        </MikMainDetailHeader>
                        {/* <MikMainContent isDetail> */}
                            <MikMainDetailBox>
                                <MikMainDetailThumbnail>
                                    <MikMainContentCardImgBox isDetail src={animeDetails.coverImage.extraLarge} alt="test" />
                                    <MikMainDetailButtonAddCollection leftIcon={<PlusSquareIcon />} variant='solid' onClick={modalDisclosure.onOpen}>
                                        Add to collection
                                    </MikMainDetailButtonAddCollection>
                                </MikMainDetailThumbnail>
                                <div>
                                    <MikMainDetailDescriptionTitle as='h1' size='md'>{animeDetails.title.userPreferred}</MikMainDetailDescriptionTitle>
                                    <MikMainDetailDescriptionBody>{parse(animeDetails.description)}</MikMainDetailDescriptionBody>
                                    {/* <MikNavbarList to='/collection'>Manga</MikNavbarList>
                                    <MikNavbarList to='/collection'>Character</MikNavbarList>
                                    <MikNavbarList to='/collection'>Studio</MikNavbarList>
                                    <MikNavbarList to='/collection'>Collection</MikNavbarList> */}
                                </div>
                            </MikMainDetailBox>
                        {/* </MikMainContent> */}

                        <MikModalCustom 
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={modalDisclosure.isOpen}
                            onClose={modalDisclosure.onClose}
                            modalBody={(
                                <FormControl>
                                    <FormLabel>Choose collection</FormLabel>
                                    <Select 
                                        value={selectedCollection}
                                        onChange={handleSelectedCollection}
                                        placeholder='Select collection'>
                                        {
                                            collectionList.map((collection, index) => (
                                                <option ref={initialRef} key={index} value={collection.name}>{collection.name}</option>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            )}
                            modalFooter={(
                                <>
                                    <Button disabled={selectedCollection === ''} colorScheme='blue' mr={3} onClick={() => handleAddAnimeToCollection({ animeDetails, toast })}>
                                    Save
                                    </Button>
                                    <Button onClick={modalDisclosure.onClose}>Cancel</Button>
                                </>
                            )}
                        />
                    </>
                )
            }
        </>
    );
}

export default AnimeDetails;