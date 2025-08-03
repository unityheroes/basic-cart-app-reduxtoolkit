import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

export const fetchProducts= createAsyncThunk("productsSlice/fetchProducts", async () => {
    const response = await fetch("http://localhost:8000/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products in json server ");
    }
    const data = await response.json();
    return data;
});
const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });

    }
});
export const {productsActions} = productsSlice.actions;
export default productsSlice.reducer;