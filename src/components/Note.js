import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../features/notes/notesSlice";

const Note = ({ text, completed, id }) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(updateNote({ id: id, changes: { completed: !completed } }));
  };
  const deleteItem = () => {
    dispatch(deleteNote(id));
  };
  return (
    <div className="bg-gray-100 rounded-lg m-3 flex justify-between p-3">
      <div>
        <input
          className="p-2"
          type="checkbox"
          value={completed}
          onChange={toggle}
        />
        <span className="italic m-1">{text}</span>
      </div>
      <div className="flex justify-center place-items-start">
        <button
          className="rounded-sm text-red-500 font-bold w-5 bg-white"
          onClick={deleteItem}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Note;
