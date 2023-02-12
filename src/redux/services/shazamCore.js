import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi =  createApi({
        reducePath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '1366c740e3msh3cefb15693158ecp19a904jsne1e1d56c2195')
            
                return headers;
            },
        }),
        endpoints: (builder) => ({ 
            getTopCharts: builder.query({ query: () => '/charts/world' }),
        })
    });

    export const {
        useGetTopChartsQuery,
        useGetTopCharts,
    } = shazamCoreApi;