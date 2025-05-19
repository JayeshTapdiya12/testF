import axios from "axios";

const baseUrl = 'http://localhost:3000/api/v1/wishlist';

const token = localStorage.getItem("token")
const headers = { headers: { 'Authorization': 'bearer ' + token } }




export const getWishlist = async () => {

    const res = await axios.get(`${baseUrl}/`, headers)
    return res;
}
export const addWish = async (id) => {
    const res = await axios.post(`${baseUrl}/add/${id}`, headers);
    return res;


}

export const removeWish = async (id) => {

    const res = await axios.delete(`${baseUrl}/remove/${id}`, headers);
    return res;

}