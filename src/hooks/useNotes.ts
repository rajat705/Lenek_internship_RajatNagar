import { useNoteStore } from "../store/noteStore"

export function useNotes() {
  const notes = useNoteStore((state) => state.notes)
  const addNote = useNoteStore((state) => state.addNote)
  const deleteNote = useNoteStore((state) => state.deleteNote)

  return { notes, addNote, deleteNote }
}
