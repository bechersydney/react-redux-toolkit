import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-store";
import counterReducer from "./counter-store";

// use configureStore to have multiple slice

const store = configureStore({
    reducer: {
        // .reducer is the way redux access the reducers in slice
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;



