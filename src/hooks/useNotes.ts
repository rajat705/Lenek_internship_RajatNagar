import { useNoteStore } from "../store/noteStore"
// Custom hook to access notes store
export function useNotes() {
  const notes = useNoteStore((state) => state.notes)
  const addNote = useNoteStore((state) => state.addNote)
  const deleteNote = useNoteStore((state) => state.deleteNote)
// Return notes and actions
  return { notes, addNote, deleteNote }
}
