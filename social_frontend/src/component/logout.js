import {useEffect} from "react";
import axios from "axios";

export const Logout = () => {

    useEffect(() => {
        localStorage.clear();
        axios.defaults.headers.common['Authorization'] = "";
        window.location.href = '/login'
    }, []);

    return (
        <div></div>
    )
}
