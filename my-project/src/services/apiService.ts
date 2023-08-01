import {createApi} from '@reduxjs/toolkit/query/react'
import {baseQuery} from "../configs/fetchBaseQueryCustom.ts";

export const apiService = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
    refetchOnMountOrArgChange: true
})

