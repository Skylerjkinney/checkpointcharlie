import { AppState } from "../AppState.js";
import { NoteModel } from "../models/NoteModel.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




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
        notesService.loadNote()
        _drawNotesList()
        this.countNotes()
        AppState.on('currentNote', _drawActiveNote)
        AppState.on('notes', _drawNotesList)

    }
    countNotes() {
        let noteCount = 0
        let notes = AppState.notes
        for (let i = 0; i < notes.length; i++) {
            if (notes[i] instanceof NoteModel) {
                noteCount++
                console.log(noteCount)
            }
        }
        document.getElementById("note-count").innerText = noteCount
        _drawNotesList()
    }
    createNote() {
        event.preventDefault()
        const form = event.target
        const noteData = getFormData(form)
        noteData.currentDate = noteData.currentDate.replaceAll('-', '/')
        console.log('➕📰', noteData)
        notesService.createNote(noteData)
        form.reset()
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
        const newBody = document.getElementById('note-area').value
        console.log('new body', newBody)
        notesService.commitNote(newBody)
    }
    async deleteNote(noteId) {
        let isConfirmed = await Pop.confirm("Lose Sweet Juicy Knowledge??", 'Your Mind Hungers...', 'YEET', 'YOLO')
        if (isConfirmed) {
            console.log('YEETING', noteId);
            notesService.deleteNote(noteId)
        }

    }

}