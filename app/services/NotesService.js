import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
import { NoteModel } from "../models/NoteModel.js";
import { loadState, saveState } from "../utils/Store.js";

class NotesService {
    createNote(formData) {
        const newNote = new NoteModel(formData);
        console.log('made new note', newNote);
        AppState.notes.push(newNote)
        this.saveNote()
    }
    openNote(noteId) {
        const note = AppState.notes.find(note => note.id == noteId)
        AppState.currentNote = note
        console.log('current note', note)
        note.locked = true

    }
    editNote() {
        const activeNote = AppState.currentNote
        console.log(activeNote)
        activeNote.locked = false
        console.log('the active note is unlocked')
        AppState.emit('currentNote')
    }
    commitNote(newBody) {
        // debugger
        const currentNote = AppState.currentNote
        currentNote.locked = true
        currentNote.body = newBody
        AppState.emit('currentNote')
        this.saveNote()
    }
    saveNote() {
        saveState('currentNote', AppState.currentNote)
    }
}

export const notesService = new NotesService()