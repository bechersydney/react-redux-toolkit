import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false, userData: {} },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
        },
        register(stage, action) {},
        logOut(state) {
            state.isAuthenticated = false;
        },
    },
});
// when importing this from another file it should be inside {authActions} since this is not export default
export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
