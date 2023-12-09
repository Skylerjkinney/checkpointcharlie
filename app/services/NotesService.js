import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
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
        this.previewNote
        console.log('🗒️', note)
    }
    previewNote() {
        const activeNote = AppState.currentNote
        this.activeNote
        activeNote.locked = true
        console.log(AppState);

    }
}


export const notesService = new NotesService()