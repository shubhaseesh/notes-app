import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../features/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddNote = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) => {
    setNote(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (note === "") {
      return;
    } else {
      const items = note.split(".");
      dispatch(
        addNotes(
          items.map((item) => ({ id: nanoid(), note: item, completed: false }))
        )
      );
    }
    setNote("");
  };
  return (
    <form
      className="w-full max-w-sm justify-center items-center"
      onSubmit={onSubmit}
    >
      <div className="md:flex md:items-center justify-center">
        <div className="md:w-4/5 p-2">
          <label htmlFor="user">Add Note</label>
          <input
            value={note}
            type="text"
            className="bg-white appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Type here"
            onChange={onChange}
          />
          <button className="rounded bg-blue-800 w-full h-9 text-white mt-2">
            Create Note
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNote;
