import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { isTokenExpired } from "../utils/authUtils";
import { logout } from "../slices/authSlice";
import Cookies from "js-cookie";

export default function useTokenCheck() {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token) || Cookies.get('token');

    useEffect(()=>{
        if (!token) return;

        const checkToken = () =>{
            if(isTokenExpired(token)){
                dispatch(logout());
            }
        };

        const intervalId = setInterval(checkToken,60*1000);

        return () => clearInterval(intervalId);
    },[dispatch,token]);
}