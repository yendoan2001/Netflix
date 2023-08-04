import {createApi} from '@reduxjs/toolkit/query/react'
import {fetchBaseQueryCustom} from "../configs/fetchBaseQueryCustom.ts";

export const apiService = createApi({
    baseQuery: fetchBaseQueryCustom,
    endpoints: () => ({}),
    refetchOnMountOrArgChange: true
})

