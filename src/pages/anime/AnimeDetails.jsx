import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import {
    MikMainContentCardImgBox,
    MikMainDetailBox,
    MikMainDetailButtonAddCollection,
    MikMainDetailDescriptionBody,
    MikMainDetailDescriptionTitle,
    MikMainDetailHeader,
    MikMainDetailHeaderBackButton,
    MikMainDetailHeaderInnerShadow,
    MikMainDetailInformationBox,
    MikMainDetailThumbnail,
    MikOngoingSection,
    MikTableDataCharacter
} from 'utilities/styledComponent';
import { QUERY } from 'utilities/constants';
import parse from 'html-react-parser';
import { ChevronLeftIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Button, FormControl, FormLabel, Select, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import { MikContext } from 'utilities/context';
import { CardItems, MikModalCustom } from 'components';

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
                        <MikMainDetailBox>
                            <MikMainDetailThumbnail>
                                <MikMainContentCardImgBox isDetail src={animeDetails.coverImage.extraLarge} alt={animeDetails.title.userPreferred} />
                                <MikMainDetailButtonAddCollection leftIcon={<PlusSquareIcon />} variant='solid' onClick={modalDisclosure.onOpen}>
                                    Add to collection
                                </MikMainDetailButtonAddCollection>
                            </MikMainDetailThumbnail>
                            <div>
                                <MikMainDetailDescriptionTitle as='h1' size='md'>{animeDetails.title.userPreferred}</MikMainDetailDescriptionTitle>
                                <MikMainDetailDescriptionBody>{parse(animeDetails.description)}</MikMainDetailDescriptionBody>
                            </div>
                        </MikMainDetailBox>

                        <MikMainDetailInformationBox>
                            <Tabs isLazy>
                                <TabList>
                                    <Tab>Character</Tab>
                                    <Tab>Recomendation</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <TableContainer>
                                            <Table variant='striped' size='sm'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Character</Th>
                                                        <Th>Voice Actors</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {
                                                        animeDetails.characters.edges.map((character, index) => (
                                                            <Tr key={index}>
                                                                <Td>
                                                                    <MikTableDataCharacter>
                                                                        <img src={character.node.image.medium} alt={character.node.name.userPreferred} />
                                                                        <p>{`${character.node.name.userPreferred} (${character.node.name.native})`}</p>
                                                                    </MikTableDataCharacter>
                                                                </Td>
                                                                <Td>
                                                                    <MikTableDataCharacter>
                                                                        <img src={character.voiceActors[0] && character.voiceActors[0].image.medium} alt={character.voiceActors[0] && character.voiceActors[0].name.userPreferred} />
                                                                        <p>{`${character.voiceActors[0] &&  character.voiceActors[0].name.userPreferred} (${character.voiceActors[0] && character.voiceActors[0].name.native})`}</p>
                                                                    </MikTableDataCharacter>
                                                                </Td>
                                                            </Tr>
                                                        ))
                                                    }
                                                </Tbody>
                                            </Table>
                                        </TableContainer>
                                    </TabPanel>
                                    <TabPanel>
                                        <MikOngoingSection
                                            dataLength={animeDetails.relations.edges.length || 0}>
                                            { animeDetails.relations.edges.length > 0 && CardItems({ animeList: animeDetails.relations.edges, isEdged: true }) }
                                        </MikOngoingSection>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </MikMainDetailInformationBox>

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
                                            collectionList && collectionList.map((collection, index) => (
                                                <option ref={initialRef} key={index} value={collection.name}>{collection.name}</option>
                                            ))
                                        }
                                    </Select>
                                    {
                                        !collectionList && <Text fontSize='sm'>Collection not found please add collection with this <span style={{ color: 'blue' }}><Link to='/collection'>link</Link></span></Text>
                                    }
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