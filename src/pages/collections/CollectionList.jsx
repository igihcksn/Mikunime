import React, { useContext, useEffect, useState } from 'react';
import { Header, MikModalCustom } from 'components';
import {
    MikMainCollection,
    MikMainCollectionBox,
    MikMainCollectionRemoveButton,
    MikMainContent,
    MikMainContentButtonAddCollection,
    MikMainContentCollectionTitle
} from 'utilities/styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFolder, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
  } from '@chakra-ui/react'
import { BASE_COLOR, URL } from 'utilities/constants';
import { Link } from 'react-router-dom';
import { MikContext } from 'utilities/context';

const CollectionList = () => {

    const {
        finalRef,
        initialRef,
        modalDisclosure,
    } = useContext(MikContext);
    const [ collectionList, setCollectionList ] = useState([]);
    const [ isError, setIsError ] = useState(false);
    const getCollections = localStorage.getItem('collections');
    const parseData = getCollections && JSON.parse(getCollections);

    const handleSaveCollection = () => {
        const collectionName = initialRef.current.value;
        const isDuplicate = parseData && parseData.filter(item => item.name === collectionName);

        if(collectionName !== '' && (!isDuplicate || !isDuplicate.length)) {
            const constructData = [
                ...collectionList,
                {
                    name: collectionName,
                    list: [],
                }
            ];

            setIsError(false)
            setCollectionList(constructData);
            modalDisclosure.onClose();
            return localStorage.setItem('collections', JSON.stringify(constructData));
        } else {
            return setIsError(true)
        }
    }

    const handleRemoveCollection = (props) => {
        const currentCollection = parseData.filter((item, index) => index !== props);

        setCollectionList(currentCollection);
        return localStorage.setItem('collections', JSON.stringify(currentCollection));
    }
    
    useEffect(() => {
        if (getCollections) {
            setCollectionList(JSON.parse(getCollections));
        }
    }, [getCollections]);

    return ( 
        <>
            <Header 
                isFrom='collection' 
                navigations={[
                    { link: URL.HOMEPAGE, name: 'home', isLastChild: false },
                    { link: URL.COLLECTION_LIST, name: 'collection', isLastChild: true },
                ]} />
            <MikMainContent>
                <MikMainContentCollectionTitle>
                    <h3>Collection List: </h3>
                    <MikMainContentButtonAddCollection onClick={modalDisclosure.onOpen}>
                        <FontAwesomeIcon icon={faSquarePlus} size="lg" /> Add Collection
                    </MikMainContentButtonAddCollection>
                </MikMainContentCollectionTitle>
                <MikMainCollection>
                    {
                        getCollections && getCollections.length > 0 && JSON.parse(getCollections).map((collection, index) => (
                            <MikMainCollectionBox key={index}>
                                <Link state={collection} to={URL.COLLECTION_DETAILS.replace(':slug', collection.name)}>
                                    <FontAwesomeIcon icon={faFolder} fontSize="40px" />
                                    <p>{collection.name}</p>
                                </Link>
                                <MikMainCollectionRemoveButton onClick={() => handleRemoveCollection(index)}>
                                    <FontAwesomeIcon icon={faCircleXmark} color={BASE_COLOR.DARK_RED} />
                                </MikMainCollectionRemoveButton>
                            </MikMainCollectionBox>
                        )) 
                    }
                    {
                        (!getCollections || parseData.length === 0) && (
                            <p>Collection Not Found.</p>
                        )
                    }
                </MikMainCollection>
            </MikMainContent>

            <MikModalCustom 
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={modalDisclosure.isOpen}
                onClose={modalDisclosure.onClose}
                modalBody={(
                    <FormControl isInvalid={isError}>
                        <FormLabel>Collection name</FormLabel>
                        <Input ref={initialRef} placeholder='Anim paling seru' />
                        {
                            isError && <FormErrorMessage>Collection already exist.</FormErrorMessage>
                        }
                    </FormControl>
                )}
                modalFooter={(
                    <>
                        <Button colorScheme='blue' mr={3} onClick={handleSaveCollection}>Save</Button>
                        <Button onClick={modalDisclosure.onClose}>Cancel</Button>
                    </>
                )}
            />
        </>
    );
}

export default CollectionList;