import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./components/state/noteReducer";

export const store = configureStore({
    reducer: {
        notesReducer: notesReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
