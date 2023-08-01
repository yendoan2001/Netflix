import {apiService} from "./apiService.ts";

export const authApi = apiService.injectEndpoints({
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
    })
})

export const {
    useLoginMutation
} = authApi