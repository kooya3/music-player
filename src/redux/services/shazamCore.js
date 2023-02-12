import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi =  createApi({
        reducePath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: () => {
                headers.set('X-RapidAPI-Key', '1366c740e3msh3cefb15693158ecp19a904jsne1e1d56c2195')
            }
        })
    })