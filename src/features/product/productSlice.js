import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProductThunk } from './productThunk'

const initialState = {
  isLoading: false,
  products: [],
}

export const getAllProduct = createAsyncThunk(
  'product/getAllProduct',
  getAllProductThunk
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProduct.pending]: (state) => {
      state.isLoading = true
    },
    [getAllProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.products = payload
    },
    [getAllProduct.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export default productSlice.reducer
