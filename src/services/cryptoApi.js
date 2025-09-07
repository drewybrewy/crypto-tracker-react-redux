import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'


const cryptoApiHeaders = {
    'x-rapidapi-key':process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_KEY 
}

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({url , headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;
