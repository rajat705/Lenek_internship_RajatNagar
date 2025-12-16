import { useState, useMemo } from "react";
import { useNotes } from "../hooks/useNotes";
// Notes page component
export default function Notes() {
  const [text, setText] = useState("");
  const { notes, addNote, deleteNote } = useNotes();
  // Memoized count of notes
  const noteCount = useMemo(() => notes.length, [notes]);
  // Function to handle adding a new note
  const handleAdd = () => {
    if (!text.trim()) return;
    addNote(text);
    setText("");
  };

  return (
    <div>
      {/* Input field for adding a new note */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note"
      />

      <br />
      <br />

      {/* Button to add a new note */}
      <button className="bg-rose-500 m-1 p-1 text-white hover:bg-sky-700" onClick={handleAdd}>Add Note</button>

      <br />
      <br />
      {/* Display the total number of notes */}
      <p className="text-red-600">Total notes: {noteCount}</p>

      <br />
      {/* List of notes */}
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
         
            <button className="bg-red-500 mt-2 mr-4 pl-2 pr-2 text-white hover:bg-sky-700" onClick={() => deleteNote(note.id)}> Delete </button>
               {note.text} {/* Delete button for each note */}
          </li>
        ))}
      </ul>
    </div>
  );
}
