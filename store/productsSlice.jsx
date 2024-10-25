import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products from the mock API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://my-json-server.typicode.com/andriputra/product-catalog');
    return await response.json();
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        // You can define additional synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
