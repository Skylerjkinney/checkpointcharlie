import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { NoteModel } from './models/NoteModel.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  notes = [
    new NoteModel({
      body: 'fjjsad fkjjsdkafj kl;dsfkldsjhf fkjlkjl dsjjljfasj lkj sadfdsafsaf',
      date: '12/12/12',
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())