import { SpeakerPhoneSharp } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { axiosPrivate } from '../api/axios'
import useAuth from './useAuth'
import useRefresh from './useRefresh'

function useAxiosPrivate() {

    const refresh = useRefresh()
    const {Auth} = useAuth()

    useEffect(()=>{

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response ,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );  

        return ()=>{
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    },[Auth , refresh])

return axiosPrivate
}

export default useAxiosPrivate