import { useApolloClient } from "@apollo/client";
import { useCookies } from "react-cookie";

const TOKEN_NAME = "authToken";

export const useAuthToken=()=>{
   const[cookies,setCookie,removeCookie] = useCookies([TOKEN_NAME]);  
   const setAuthToken =(authToken)=>setCookie(TOKEN_NAME,authToken)
   const removeAuthToken=()=>removeCookie(TOKEN_NAME);
   return [cookies[TOKEN_NAME],setAuthToken,removeAuthToken]
};



export const useLogout=()=>{
    const [,,removeAuthToken]=useAuthToken();
    const apolloClient = useApolloClient();

    const logout=async()=>{
        await apolloClient.clearStore(); // we remove all information in the store
        removeAuthToken();
    };
    return logout
}