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
        <h3>${this.longDate}</h3>
        <h4>Last Edited: ${this.timeStamp}</h4>
        <span> <button style="color: ${this.color};" class ="btn btn-dark border border-light" onclick = "app.NotesController.openNote('${this.id}')"> ${this.title} </button> </span>
        </div>
        `
    }



    get previewNote() {
        return ` 
        <div class = "col-12 container-fluid"> 
        <h3> ${this.title} </h3>
        <p> ${this.body} </p>
        <span>  ${this.locked ? this.EditButton : this.editableNote}</span>
        </div>`

    }
    get editableNote() {
        return `
        <span> ${this.longDate} </span>
        <div class="row p-5 mb-5">
        <button class="btn btn-success pb-5" onclick="app.NotesController.commitNote()"> Save </button>
        <button class="btn btn-danger pt-5" onclick="app.NotesController.deleteNote()"> delete </button>
      </div>
      <section class="d-flex justify-content-center align-items-center">
        <textarea class="col-12" title="your notes" name="note" id="note-area" class="w-100" rows="30">
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
    get longDate() {
        return this.currentDate.toLocaleDateString('en-US', { month: 'long', weekday: 'long', day: 'numeric', year: 'numeric' })

    }
    get shortDate() {
        return this.currentDate.toLocaleDateString()
    }
    get timeStamp() {
        let timestamp = new Date().getTime()
        let toDate = new Date(timestamp).getDate()
        let toMonth = new Date(timestamp).getMonth() + 1
        let toYear = new Date(timestamp).getFullYear()
        let original_date = toMonth + "/" + toDate + "/" + toYear
        return original_date
    }
}
