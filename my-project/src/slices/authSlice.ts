import {createSlice} from '@reduxjs/toolkit'
import {appName} from "../apps/appConstant.ts";
import {authApi} from "../services/apiAuthService.ts";

interface IUserProfile {
    _id: string,
    email: string,
    fullName: string,
    password: string,
    createdAt: string,
    likedMovies: any[],
    image: string

}

export interface IAuthState {
    accessToken: string | null
    user: IUserProfile
}

const initialState: IAuthState = {
    accessToken: localStorage.getItem(appName) || null,
    user: {
        _id: '',
        email: '',
        fullName: '',
        password: '',
        createdAt: '',
        likedMovies: [],
        image: '',
    }
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        logout: () => {
            localStorage.removeItem(appName)
            return {...initialState, accessToken: null}
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled, (state, {payload}) => {
                    localStorage.setItem(appName, payload.accessToken)
                    return {...state, accessToken: payload.accessToken}
                }
            )
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, {payload}) => {
                    return {...state, user: payload.user[0]}
                }
            )
    }
})

export const {logout} = authSlice.actions

export default authSlice.reducer