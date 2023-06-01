/* eslint-disable @typescript-eslint/no-explicit-any */
// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

// ** Reducers
import example from "./apps/example";

export const store = configureStore({
    reducer: {
        example,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),


});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export interface Redux {
    getState: any;
    dispatch: Dispatch<any>;
}