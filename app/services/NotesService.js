import { AppState } from "../AppState.js";
import { NoteModel } from "../models/NoteModel.js";
import { loadState, saveState } from "../utils/Store.js";

class NotesService {
    createNote(formData) {
        const newNote = new NoteModel(formData);
        console.log('👶📰', newNote);
        AppState.notes.push(newNote)
    }
    openNote(noteId) {
        const note = AppState.notes.find(note => note.id == noteId)
        console.log('🗒️', note)
    }
    previewNote() {
        const activeNote = AppState.currentNote
        activeNote.locked = true
        console.log(AppState);
        AppState.emit('currentNote')

    }
}


export const notesService = new NotesService()