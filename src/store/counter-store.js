import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    // inside slice you can directly mutate the state
    name: "counter",
    initialState: {
        value: 0,
        isDataShown: true,
    },
    reducers: {
        increment(state, action) {
            state.value += action.payload; // payload redux specific
        },
        decrement(state) {
            state.value--;
        },
        toggle(state) {
            state.isDataShown = !state.isDataShown;
        },
    },
});
// this export will make reducers available app wide
export const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
