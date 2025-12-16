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
      <button onClick={handleAdd}>Add Note</button>

      <br />
      <br />
      {/* Display the total number of notes */}
      <p>Total notes: {noteCount}</p>

      <br />
      {/* List of notes */}
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text} {/* Delete button for each note */}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
