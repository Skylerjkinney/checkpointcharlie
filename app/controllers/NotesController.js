import { AppState } from "../AppState.js";
import { NoteModel } from "../models/NoteModel.js";
import { notesService } from "../services/NotesService.js";




function _drawNotesList() {
    const notesList = AppState.notes
    let content = ''
    notesList.forEach(notes => content += notes.notesListItem)
    document.getElementById('note-list').innerHTML = content
}

function _drawActiveNote() {
    const activeNote = AppState.currentNote
    let content = activeNote.activeNote
    document.getElementById('this-note').innerHTML = content
}

export class NotesController {
    constructor() {
        console.log('📒', 'Notes Controller loaded in')
        _drawNotesList()
        AppState.on('notes')
        AppState.on('currentNote', _drawActiveNote)
    }
    createNote() {
        event.preventDefault()
        const form = event.target
        const noteData = getFormData(form)
        notesService.createNote(noteData)
        console.log('➕📰', noteData)
    }
    openNote(noteId) {
        console.log('🗒️', noteId)
        notesService.openNote(noteId)
    }
    // previewNote() {
    //     console.log('👀');
    //     const activeNote = AppState.currentNote

    // }
}