import { createReducer, Reducer } from "@reduxjs/toolkit";
import { setNotes } from "./noteActions";
import { BasicNotes } from "./notesState";

export interface NotesActionsState {
    notes: BasicNotes[];
}

const initialState = { notes: []} as NotesActionsState;

export const notesReducer: Reducer<NotesActionsState> = createReducer(initialState, (builder) => {
    builder.addCase(setNotes, (state, action) => {
        state.notes = action.payload;
    })
})