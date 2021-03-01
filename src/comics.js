export default class Comics {
  constructor($root, comics) {
    this.root = $root

    this.num = comics.num || 0
    this.nums = comics.nums || 1
    this.title = comics.title || 'Untitled'
    this.alt = comics.alt || 'Comics'
    this.imgURL = comics.img || ''
  }

  toHTML() {
    this.root.innerHTML = this.template
  }

  init() {
    this.template = `
      <div>${this.title}</div>
      <img src="${this.imgURL}">
    `
    this.toHTML()
  }
}
