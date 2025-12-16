import { create } from "zustand"
// Define the Note interface
export interface Note {
  id: number
  text: string
}

// Define the shape of the note store
interface NoteStore {
  notes: Note[]
  addNote: (text: string) => void
  deleteNote: (id: number) => void
}

// Zustand store for managing notes
export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],

  // Function to add a new note
  addNote: (text) =>
    set((state) => ({
      notes: [...state.notes, { id: Date.now(), text }],
    })),

    // Function to delete a note by its id
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}))
