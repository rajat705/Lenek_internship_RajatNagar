import { create } from "zustand"

export interface Note {
  id: number
  text: string
}


interface NoteStore {
  notes: Note[]
  addNote: (text: string) => void
  deleteNote: (id: number) => void
}

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],


  addNote: (text) =>
    set((state) => ({
      notes: [...state.notes, { id: Date.now(), text }],
    })),


  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}))
