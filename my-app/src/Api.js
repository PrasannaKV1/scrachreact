import axios, { Axios } from "axios";

const API =axios.create({baseURL:"https://fakestoreapi.com/products%27)"});
export const fetechproducts=async()=>{

    try{
        const response=await API.get("/products")
        return response.data
    }
    catch(error)
    {
        console.error("Failed to fetch the products ",error)
        throw error;
    }
}
