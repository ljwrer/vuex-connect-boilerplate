export default class Storage {
  constructor (key) {
    if (typeof key === 'undefined') {
      throw new Error('key must be provided')
    }
    this._key = key
    this._storage = null
    this.fetch()
  }

  fetch () {
    const storage = sessionStorage.getItem(this._key)
    if (storage) {
      this._storage = JSON.parse(storage)
    }
  }

  persistence () {
    if (this._storage === null) {
      sessionStorage.removeItem(this._key)
    } else {
      sessionStorage.setItem(this._key, JSON.stringify(this._storage))
    }
  }

  setValue (value) {
    this._storage = value
    this.persistence()
  }

  getValue () {
    return this._storage
  }

  clear () {
    this._storage = null
    this.persistence()
  }
}
