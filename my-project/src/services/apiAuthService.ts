import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import * as process from "process";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: process.env.VITE_API_URL}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user: any) => ({
                url: '/auth/login',
                method: 'POST',
                body: user
            })
        }),
        register: builder.mutation({
            query: (user: any) => ({
                url: '/auth/register',
                method: 'POST',
                body: user
            })
        }),
        updateUser: builder.mutation({
            query: (user: any) => ({
                url: `/user`,
                method: 'PUT',
                body: user
            })
        }),
        changePassword: builder.mutation({
            query: (password: any) => ({
                url: '/user/password',
                method: 'PUT',
                body: password
            })
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useLoginMutation

} = authApi