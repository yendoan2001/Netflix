import {apiService} from "./apiService.ts";

export const movieApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (params: any) => ({
                url: '/movie',
                method: 'GET',
                params: params
            })
        }),
        getMovie: builder.query({
            query: (id: string) => ({
                url: `/movie/${id}`,
                method: 'GET',
            })
        }),
        getRatedMovies: builder.query({
            query: () => ({
                url: '/movie/rated/top',
                method: 'GET',
            })
        }),
        getRandomMovies: builder.query({
            query: () => ({
                url: `/movie/random/all`,
                method: 'GET',
            })
        }),
        addReview: builder.mutation({
            query: ({id, body}) => ({
                url: `/movie/review/${id}`,
                method: 'POST',
                body: body
            })
        }),
        updateMovie: builder.mutation({
            query: ({id, body}) => ({
                url: `/movie/${id}`,
                method: 'PUT',
                body: body
            })
        }),
        deleteMovies: builder.mutation({
            query: () => ({
                url: `/movie`,
                method: 'DELETE',
            })
        }),
        addMovie: builder.mutation({
            query: (body) => ({
                url: `/movie`,
                method: 'POST',
                body: body
            })
        }),
        addLikedMovie: builder.mutation({
            query: (body) => ({
                url: `/user/favorite`,
                method: 'POST',
                body: body
            })
        }),
        deleteLikedMovie: builder.mutation({
            query: () => ({
                url: `/user/favorite`,
                method: 'DELETE',
            })
        }),

    })
})
export const {
    useGetMovieQuery,
    useGetMoviesQuery,
    useGetRandomMoviesQuery,
    useGetRatedMoviesQuery,
    useAddLikedMovieMutation,
    useAddMovieMutation,
    useAddReviewMutation,
    useDeleteLikedMovieMutation,
    useDeleteMoviesMutation,
} = movieApi