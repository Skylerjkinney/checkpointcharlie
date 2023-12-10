import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { NoteModel } from './models/NoteModel.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  notes = [
    new NoteModel({
      title: 'my first entry',
      body: 'Hey im the note from the model',
      date: '12/12/12',
      color: 'red'

    }),
    new NoteModel({
      title: 'my second entry',
      body: ' i like ice cream',
      date: '12/13/12',
      color: 'blue'
    })
  ]
  /** @type {NoteModel} */
  currentNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())