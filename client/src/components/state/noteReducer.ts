import { createReducer, Reducer } from "@reduxjs/toolkit";
import { setNotes, setIsAll } from "./noteActions";
import { BasicNotes } from "./notesState";

export interface NotesActionsState {
    notes: BasicNotes[];
    isAll: Boolean;
}

const initialState = { notes: [], isAll: false } as NotesActionsState;

export const notesReducer: Reducer<NotesActionsState> = createReducer(initialState, (builder) => {
    builder.addCase(setNotes, (state, action) => {
        state.notes = action.payload;
    })
    builder.addCase(setIsAll, (state, action) => {
        state.isAll = action.payload;
    })
})