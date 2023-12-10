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
        return `<div class="p-5">
        <span> <button style="color: ${this.color};" class ="btn btn-warning" onclick = "app.NotesController.openNote('${this.id}')"> ${this.title} </button> </span>
        </div>
        `
    }



    get previewNote() {
        return ` 
        <div class = "col-8"> 
        <h3> ${this.title} </h3>
        <p> ${this.body} </p>
        <span>  ${this.locked ? this.EditButton : this.editableNote}</span>
        </div>`

    }
    get editableNote() {
        return `
        <div class="row p-5 mb-5">
        <button class="btn btn-success" onclick="app.NotesController.commitNote()"> Save </button>
        <button class="btn btn-danger" onclick="app.NotesController.deleteNote()"> delete </button>
      </div>
      <section class="d-flex justify-content-center align-items-center">
        <textarea class="col-10" title="your notes" name="note" id="note-area" class="w-75" rows="30">
        ${this.body}
        </textarea>
      </section>`
    }
    get EditButton() {
        return `<button class="btn btn-info" onclick="app.NotesController.editNote()"> Edit </button>`
    }
    get SaveButton() {
        return `<button class="btn btn-success" onclick="app.NotesController.saveNote()"> Save </button>`
    }
}
