import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Note from "./Note";
import { notesSelector, restoreNotes } from "../features/notes/notesSlice";
import { clearNotes } from "../features/notes/notesSlice";

const NotesList = () => {
  const dispatch = useDispatch();
  const allNotes = useSelector(notesSelector.selectEntities);
  const notesCount = useSelector(notesSelector.selectTotal);
  const deletedNotes = useSelector((state) => state.notes.deletedNotes);
  const notesList = [];
  for (const id in allNotes) {
    if (Object.hasOwnProperty.call(allNotes, id)) {
      const noteItem = allNotes[id];
      notesList.push(
        <Note
          key={noteItem.id}
          id={noteItem.id}
          completed={noteItem.completed}
          text={noteItem.note}
        />
      );
    }
  }
  const clearAllNotes = () => {
    dispatch(clearNotes());
  };
  const restore = (note) => {
    dispatch(restoreNotes(note))
  }
  const deletedList = deletedNotes.map((item) => (
    <div
    className="flex justify-between border border-gray-300 m-1 p-3 rounded shadow-lg"
    key={item.id}>
      <span>{item.note}</span>
      <button className="text-green-800 text-xl" onClick={() => restore(item)}>Restore</button>
    </div>
  ));

  return (
    <div className="border border-red-600 flex flex-col justify-around rounded w-2/5 m-4 p-4">
      <h3 className="text-gray-700 text-2xl text-center font-light">
        Your Notes
      </h3>
      <div className="flex justify-between">
        <h4>Total Notes: {notesCount}</h4>
        <button
          onClick={clearAllNotes}
          className="bg-red-600 rounded-sm text-white w-24 p-1"
        >
          Clear All
        </button>
      </div>
      <div>{notesList.reverse()}</div>
      <h3>Deleted Notes: </h3>
      {deletedList}
    </div>
  );
};

export default NotesList;
