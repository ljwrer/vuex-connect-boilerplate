import Storage from './Storage'

export class SideBarStore {
  constructor () {
    this._key = '$$SIDE_BAR_STORE'
    this.storage = new Storage(this._key)
  }

  add (id) {
    const set = this.getValueSet()
    set.add(id)
    this.storage.setValue([...set])
  }

  delete (id) {
    const set = this.getValueSet()
    set.delete(id)
    this.storage.setValue([...set])
  }

  getValue () {
    return this.storage.getValue() || []
  }

  getValueSet () {
    return new Set([...this.getValue()])
  }

  clear () {
    this.storage.clear()
  }
}
export const sideBarStore = new SideBarStore()
