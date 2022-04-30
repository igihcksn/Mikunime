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
    WHITE: '#FFFFFF',
    SOFT_RED: '#ED213A',
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
                media (id: $id, seasonYear: $seasonYear, season: $season, sort: $sort) {
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
    // GET_RECOMEND_ANIME: gql`
    //     query ($id: Int) {
    //         Recommendation (id: $id) {
    //             id
    //             rating
    //             media
    //         }
    //     }
    // `,
}
