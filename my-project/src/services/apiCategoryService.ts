import {apiService} from "./apiService.ts";

export const categoryApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'GET',
            })
        }),
        getCategories: builder.query({
            query: () => ({
                url: '/category',
                method: 'GET',
            })
        }),
        addCategory: builder.mutation({
            query: (body) => ({
                url: `/category`,
                method: 'POST',
                body: body
            })
        }),
        updateCategory: builder.mutation({
            query: ({id, body}) => ({
                url: `/category/${id}`,
                method: 'PUT',
                body: body
            })
        }),
        deleteCategory: builder.mutation({
            query: (id: string) => ({
                url: `/category/${id}`,
                method: 'DELETE',
            })
        })
    })
})
export const {
    useGetCategoryQuery,
    useGetCategoriesQuery,
    useAddCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
} = categoryApi