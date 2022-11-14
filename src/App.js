import React from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";



const App = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="h-40 flex justify-center items-center p-8 bg-blue-100">
        <AddNote />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <NotesList />
      </div>
    </div>
  );
};

export default App;
