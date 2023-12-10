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
    console.log(activeNote)
    let content = activeNote.previewNote
    console.log(content)
    document.getElementById('this-note').innerHTML = content
}

export class NotesController {
    constructor() {
        console.log('📒', 'Notes Controller loaded in')
        _drawNotesList()
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
        _drawActiveNote()
    }
    editNote() {
        console.log('editing the note in controller')
        notesService.editNote()
    }
    commitNote() {
        console.log('commiting in controller')
        const newBody = document.getElementById('this-note').value
        console.log('new body', newBody)
        notesService.commitNote(newBody)
    }
    saveNote() {
        console.log('saving note')
    }
}