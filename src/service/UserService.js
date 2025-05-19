// import { Password } from "@mui/icons-material";
import axios from "axios";

const baseUrl = 'http://localhost:3000/api/v1/users'

export const login = async (email, password) => {
    const data = {
        email: email,
        password: password
    };
    const res = await axios.post(`${baseUrl}/login`, data);
    return res;
}


export const sign = async (fname, lname, phone, address, email, password) => {
    const data = {
        fname: fname,
        lname: lname,
        phone: phone,
        address: address,
        email: email,
        password: password
    };
    const res = await axios.post(`${baseUrl}/sign`, data);
    return res;
}