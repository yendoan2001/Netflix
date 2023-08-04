import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/dist/query';
import {appName} from "../apps/appConstant.ts";
import {notification} from "antd";

const openNotification = (message: string, messageType?: 'warning' | 'info' | 'success') => {
    if (messageType) {
        switch (messageType) {
            case 'warning':
                break
            case 'info':
                break
            default:
                notification.success({
                    message: (`${message}`),
                    placement: 'top'
                })
                break
        }
    } else {
        notification.error({
            message: (`${message}`),
            placement: 'bottom',
            style: {width: 400}
        })
    }
}
export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem(appName)
        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`)
        }
        return headers
    }
})

export const fetchBaseQueryCustom: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    const err = result.error?.data as any
    if (result.error && result.error.status) {
        switch (result.error.status) {
            case 401:
                localStorage.removeItem(appName)
                if (window.location.pathname !== '/auth/login') {
                    openNotification(`Không có quyển truy cập`)
                    setTimeout(() => {
                        window.location.href = '/auth/login'
                    }, 700)
                } else {
                    openNotification(err.error)
                }
                break
            case 500:
                openNotification(err.error)
                break
            case 403:
                window.location.href = '/user/errors/forbidden'
                break
            case 'FETCH_ERROR':
                break
            default:
                openNotification(err.error)
                break
        }
    }
    return result
}