import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Dhoni',
        email: 'dhoni@test.com'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload;
            state.email = action.payload;
        },
        remove: (state) => state = {},
        addHello: (state, action) => {
            state.name = `Hello ${action.payload.name}`;
        }
    }
})

export const { update, remove, addHello } = userSlice.actions;

export default userSlice.reducer;