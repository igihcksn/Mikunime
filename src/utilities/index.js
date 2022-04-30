import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { URL } from "./constants";


export const client = new ApolloClient({
    uri: URL.API.ANILIST_GQL,
    cache: new InMemoryCache()
});

export const generateSeason = () => {
    const dateNow = new Date();
    return {
        spring: {
            startDate: new Date(dateNow.setDate(5), dateNow.setMonth(2)),
            endDate: new Date(dateNow.setDate(6), dateNow.setMonth(5))
        }
    };
}
