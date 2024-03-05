import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts:  (currentValue,action) => action.payload
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer

export const getProductsThunk = () => (dispatch) =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/V1/products'
    axios.get(url)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))
}