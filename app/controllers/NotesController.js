import { AppState } from "../AppState.js";



function _drawNotesList() {
    const notesList = AppState.notes
    let content = ''
    notesList.forEach(notes => content += notesList.notesList)
    document.getElementById('')
}

export class NotesController {
    constructor() {
        console.log('📒', 'Notes Controller loaded in')
    }
}