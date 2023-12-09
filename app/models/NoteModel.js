import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";


export class NoteModel {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.color = data.color
        this.currentDate = new Date(data.currentDate)
        this.body = data.body || ''
        this.locked = true
        console.log('new 🗒️', this)
    }

    get notesListItem() {
        return `<div>
        <span> <button class ="btn btn-primary" onclick = "app.NotesController.openNote('${this.id}')"> ${this.title} </button> </span>
        </div>
        `
    }



    get activeNote() {
        return `
            <button class ="btn btn-success"> Edit </button>
        <p rows = "30" class = "w-75">
        ${this.body}
        </p> `

    }
    get editableNote() {
        return `
    <section class="row d-flex justify-content-center">
        <textarea title="your notes" name="note" id="note-area" class="w-75" rows="30">${this.body}
        </textarea>
    </section> `
    }
}
