class FlagIconElement extends HTMLElement {
  connectedCallback() {
    const style = this.style
    style.display = 'inline-block'
    style.position = 'relative'
    style.backgroundSize = 'contain'
    style.backgroundPosition = '50%'
    style.backgroundRepeat = 'no-repeat'
    style.height = '1em'

    this._upgradeProperty('squared')
    this._render()
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop]
      delete this[prop]
      this[prop] = value
    }
  }

  get squared() { return this.hasAttribute('squared') }
  set squared(val) {
    const isSquared = Boolean(val)
    if (isSquared) {
      this.setAttribute('squared', '')
    } else {
      this.removeAttribute('squared')
    }
    this._render()
  }

  private _path: string = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags'
  get path() { return this._path }
  set path(val) {
    this._path = val
    this._render()
  }

  get country() { return this.getAttribute('country') }
  set country(val) {
    this.setAttribute('country', val)
    this._render()
  }

  _render() {
    const url = `url(${this.path}/${this.squared ? '1x1' : '4x3'}/${this.country.toLowerCase()}.svg)`
    this.style.backgroundImage = url
    this.style.width = this.squared ? '1em' : '1.33333333em'
  }
}

const id = 'flag-icon'

interface HTMLElementTagNameMap {
  id: FlagIconElement;
}

if (!customElements.get(id)) {
  customElements.define(id, FlagIconElement)
}
