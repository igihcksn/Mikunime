import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'utilities/constants';
import { useDisclosure } from '@chakra-ui/react';

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
    const [ selectedCollection, setSelectedCollection ] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();
    const finalRef = useRef();

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
    };

    const getCollections = () => JSON.parse(localStorage.getItem('collections'));

    const collectionList =  getCollections();

    const handleSelectedCollection = (e) => setSelectedCollection(e.target.value);

    const handleAddAnimeToCollection = ({ animeDetails, toast }) => {
        const collectionRow = collectionList.filter(item => item.name === selectedCollection);
        const indexCollection = collectionList.map(item => item.name).indexOf(selectedCollection);

        const constructData = {
            ...collectionRow[0],
            list: [
                ...collectionRow[0].list,
                animeDetails,
            ]
        }

        collectionList[indexCollection] = constructData;
        localStorage.setItem('collections', JSON.stringify(collectionList));
        onClose();
        return toast({
            title: 'Add collection success',
            description: `This ${animeDetails.title.userPreferred} is added in collection`,
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
        })
    }

    return (
        <MikContext.Provider value={{
            animeList,
            isLoading,
            hasMore,
            loadMoreData,
            collectionList,
            initialRef,
            finalRef,
            modalDisclosure: {
                isOpen,
                onOpen,
                onClose
            },
            handleSelectedCollection,
            handleAddAnimeToCollection,
            selectedCollection,
        }}>
            {props.children}
        </MikContext.Provider>
    )
};

export {
    MikContext,
    MikProvider,
};
