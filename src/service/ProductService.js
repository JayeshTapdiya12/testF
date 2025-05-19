import axios from "axios";

const baseUrl = 'http://localhost:3000/api/v1/product'

export const getProducts = async () => {
    const res = await axios.get(`${baseUrl}`);
    return res;
}


export const getById = async (id) => {
    const res = await axios.get(`${baseUrl}/${id}`);
    return res;
}

export const addProduct = async (name, price, category, brand, color, description, img, review) => {
    const data = {
        name: name,
        price: price,
        category: category,
        brand: brand,
        color: color,
        description: description,
        img: img,
        review: review
    };
    const res = await axios.post(`${baseUrl}/productadd`, data);
    return res;

}