import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const notesAdapter = createEntityAdapter();
export const notesSelector = notesAdapter.getSelectors((state) => state.notes);

export const notesSlice = createSlice({
  name: "note",
  initialState: notesAdapter.getInitialState({
    deletedNotes: [],
  }),
  reducers: {
    addNote: notesAdapter.addOne,
    addNotes: notesAdapter.addMany,
    deleteNote(state, action) {
      state.deletedNotes.push(state.entities[action.payload]);
      notesAdapter.removeOne(state, action);
    },
    clearNotes: notesAdapter.removeAll,
    updateNote: notesAdapter.updateOne,
    restoreNotes(state, action) {
      notesAdapter.addOne(state, action);
      state.deletedNotes = state.deletedNotes.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const {
  addNote,
  addNotes,
  deleteNote,
  clearNotes,
  updateNote,
  restoreNotes,
} = notesSlice.actions;

export default notesSlice.reducer;
