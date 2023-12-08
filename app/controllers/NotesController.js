import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";



function _drawNotesList() {
    const notesList = AppState.notes
    let content = ''
    notesList.forEach(notes => content += notesList.notesList)
    document.getElementById('note-list').innerHTML = content
}

export class NotesController {
    constructor() {
        console.log('📒', 'Notes Controller loaded in')
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
}