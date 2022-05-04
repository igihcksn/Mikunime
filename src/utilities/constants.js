import { gql } from "@apollo/client";

export const URL = {
    HOMEPAGE: '/',
    ANIME_DETAILS: '/anime/:slug/details',
    COLLECTION_LIST: '/collection',
    COLLECTION_DETAILS: '/collection/:slug/details',

    API: {
        ANILIST_GQL: 'https://graphql.anilist.co',
    },
};

export const BASE_COLOR = {
    WHITE: '#F7F7F7',
    SOFT_RED: '#E81536',
    DARK_RED: '#93291E',
    BLACK: '#06113C',
};

export const QUERY = {
    GET_LIST_ANIME: gql`
        query ($id: Int, $page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason, $sort: [MediaSort]) {
            Page (page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                }
                media (id: $id, isAdult: false, seasonYear: $seasonYear, season: $season, sort: $sort) {
                    id
                    title {
                        romaji
                        english
                        native
                        userPreferred
                    }
                    coverImage {
                        extraLarge
                        color
                    }
                    averageScore
                    episodes
                    duration
                    seasonYear
                    trending
                }
            }
        }
    `,
    GET_DETAILS_ANIME: gql`
        query ($id: Int) {
            Media (id: $id, type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                    userPreferred
                }
                description
                status
                seasonYear
                seasonInt
                season
                genres
                episodes
                bannerImage
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                staff {
                    edges {
                    node {
                        name {
                        native
                            userPreferred
                        }
                        image {
                            medium
                        }
                        
                    }
                    }
                }
                characters {
                    edges {
                        node {
                            name {
                                native
                                userPreferred
                            }
                            gender
                            age
                            image {
                                medium
                            }
                        }
                        voiceActors {
                            id
                            name {
                                native
                                userPreferred
                            }
                            image {
                                large
                                medium
                            }
                        }
                    }
                }
            }
        }
    `,
}
