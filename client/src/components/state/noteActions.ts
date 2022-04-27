import { createAction } from "@reduxjs/toolkit";
import { BasicNotes } from "./notesState";

//notes actions
export const setNotes = createAction<BasicNotes[]>("notes/setNotes");
export const setIsAll = createAction<Boolean>("notes/setIsAll");