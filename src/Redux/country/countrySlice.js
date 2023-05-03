import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const countryDataFetch = createAsyncThunk('country', async () => {
 const resp = await fetch('https://restcountries.com/v3.1/all');
 const result = await resp.json();

 return result;
});


const initialState = {
    countryItem: [],
    loading: false,
    error: null,
}

const countrySlice = createSlice({
 name: 'country',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
    builder
    .addCase(countryDataFetch.pending, (state) => ({
        ...state,
        loading: true,
    }))
    .addCase(countryDataFetch.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countryItem: action.payload,
    }))
    .addCase(countryDataFetch.rejected, (state) => ({
        ...state,
        loading: false,
    }));
 },
});

export default countrySlice.reducer;