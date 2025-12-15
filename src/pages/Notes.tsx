import { useState, useMemo } from "react"
import { useNotes } from "../hooks/useNotes"

export default function Notes() {
  const [text, setText] = useState("")
  const { notes, addNote, deleteNote } = useNotes()


  const noteCount = useMemo(() => notes.length, [notes])

  const handleAdd = () => {
    if (!text.trim()) return
    addNote(text)
    setText("")
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note"
      />

      <br />
      <br />

      <button onClick={handleAdd}>
        Add Note
      </button>

      <br />
      <br />

      <p>Total notes: {noteCount}</p>

      <br />

    </div>
  )
}
