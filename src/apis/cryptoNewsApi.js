import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bing-news-search1.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-BingApis-SDK', 'true');
            headers.set('X-RapidAPI-Key', 'aa4cac6c51mshaf32a1f05c8eed1p1a1a78jsnafd4934e95c1');
            headers.set('X-RapidAPI-Host', 'bing-news-search1.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;