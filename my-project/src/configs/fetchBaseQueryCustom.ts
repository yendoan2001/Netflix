import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query';
import {appName} from "../apps/appConstant.ts";


export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem(appName)
        console.log(localStorage)
        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`)
        }
        return headers
    }
})