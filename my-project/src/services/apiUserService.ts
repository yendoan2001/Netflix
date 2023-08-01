import {apiService} from "./apiService.ts";

export const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getLikedMovies: builder.query({
            query: () => ({
                url: '/user/favorite',
                method: 'GET',
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url: '/user',
                method: 'GET',
            })
        }),
        deleteUser: builder.mutation({
            query: (id: string) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            })
        })
    })
})
export const {
    useGetLikedMoviesQuery,
    useGetUsersQuery,
    useDeleteUserMutation,
} = userApi