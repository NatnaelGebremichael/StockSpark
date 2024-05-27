import { createSlice } from "@reduxjs/toolkit";

//  Initial State
const initialState = {
    shopLinkLoading: false,
    shopLinkLoaded: false,
};

export const shopSlice = createSlice({
    name: "shop",
    initialState,
})