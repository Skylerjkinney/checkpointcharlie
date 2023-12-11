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
        currentNote.currentDate = currentNote.timeStamp
        AppState.emit('currentNote')
        this.saveNote()
    }
    saveNote() {
        saveState('notes', AppState.notes)
        app.NotesController.countNotes()
    }
    loadNote() {
        let loadedNote = loadState('notes', [NoteModel])
        AppState.notes = loadedNote
    }
    deleteNote(noteId) {
        const indexToYeet = AppState.notes.findIndex(note => noteId == noteId)
        if (indexToYeet > -1) {
            AppState.notes.splice(indexToYeet, 1)
            this.saveNote()
        }
    }
}

export const notesService = new NotesService()