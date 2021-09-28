import { createSlice } from "@reduxjs/toolkit";

const initalStateValue = { name: "Unknown", age: 0, email: "Unknown" }
export const userDataSlice = createSlice({
    name: "userData",
    initialState: { value: initalStateValue },
    reducers: {
        getUserInfo: (preState, action) => {
            preState.value = action.payload
        },

        clearUserData: (state, action) => {
            state.value = initalStateValue
        }
    }
})

export const { getUserInfo, clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;