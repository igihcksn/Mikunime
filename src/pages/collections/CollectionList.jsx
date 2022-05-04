import React, { useEffect, useRef, useState } from 'react';
import { Header } from 'components';
import { MikMainCollection, MikMainCollectionBox, MikMainCollectionRemoveButton, MikMainContent, MikMainContentButtonAddCollection, MikMainContentCollectionTitle } from 'utilities/styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFolder, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    useDisclosure,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
  } from '@chakra-ui/react'
import { BASE_COLOR, URL } from 'utilities/constants';
import { Link } from 'react-router-dom';

const CollectionList = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ collectionList, setCollectionList ] = useState([]);
    const [ isError, setIsError ] = useState(false);
    const getCollections = localStorage.getItem('collections');
    const parseData = getCollections && JSON.parse(getCollections);

    const initialRef = useRef();
    const finalRef = useRef();

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
            onClose();
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
                    <MikMainContentButtonAddCollection onClick={onOpen}>
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

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your own collection</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Collection name</FormLabel>
                            <Input ref={initialRef} placeholder='Anim paling seru' />
                            {
                                isError && <FormErrorMessage>Collection already exist.</FormErrorMessage>
                            }
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSaveCollection}>
                        Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CollectionList;