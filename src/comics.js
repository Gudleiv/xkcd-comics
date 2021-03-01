export default class Comics {
  constructor($root, comics) {
    this.root = $root

    this.num = comics.num || 0
    this.latest = comics.latest
    this.title = comics.title || 'Untitled'
    this.alt = comics.alt || ''
    this.img = comics.img || ''
  }

  toHTML() {
    this.root.innerHTML = this.template
  }

  init() {
    const title = this.title
    const img = this.img
    const alt = this.alt
    const prev = this.num - 1
    const next = this.latest ? '#' : this.num + 1
    
    this.template = `
      <div>${title}</div>
      <img title="${alt}" alt="${alt}" src="${img}">
      <a href="/1">|<</a>
      <a href="/${prev}"><</a>
      <a href="/${next}">></a>
      <a href="/">>|</a>
    `
    this.toHTML()
  }
}
