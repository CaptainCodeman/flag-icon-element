declare global {
  interface CSSStyleDeclaration {
    contain: 'none'
           | 'strict'
           | 'content'
           | 'size'
           | 'layout'
           | 'style'
           | 'paint'
           | 'inherit'
           | 'initial'
           | 'unset'
  }
}

const SQUARED = 'squared'
const COUNTRY = 'country'

export class FlagIconElement extends HTMLElement {
  private _initialize = true

  connectedCallback() {
    this._upgradeProperty('squared')
    this._upgradeProperty('country')

    if (this._initialize) {
      const style = this.style
      style.display = 'inline-block'
      style.backgroundSize = 'contain'
      style.backgroundPosition = '50%'
      style.backgroundRepeat = 'no-repeat'
      style.height = '1em'
      style.contain = 'strict'

      if (this.squared) {
        this.style.width = '1em'
      } else {
        this.style.width = '1.33333em'
      }
      this._initialize = false
    }
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      const value = this[prop]
      delete this[prop]
      this[prop] = value
    }
  }

  static get observedAttributes() { return [SQUARED, COUNTRY]; }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case SQUARED:
        if (newValue === '') {
          this.style.width = '1em'
        } else {
          this.style.width = '1.33333em'
        }
      case COUNTRY:
        this.style.backgroundImage = this.country
          ? `url(${FlagIconElement.path}/${this.squared ? '1x1' : '4x3'}/${this.country.toLowerCase()}.svg)`
          : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        break
    }
  }

  get squared() { return this.hasAttribute(SQUARED) }
  set squared(val) {
    const isSquared = Boolean(val)
    if (isSquared) {
      this.setAttribute(SQUARED, '')
    } else {
      this.removeAttribute(SQUARED)
    }
  }

  get country() { return this.getAttribute('country') }
  set country(val) { this.setAttribute('country', val) }

  private static _path: string = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags'
  static get path() { return this._path }
  static set path(val) { this._path = val }
}

const id = 'flag-icon'

interface HTMLElementTagNameMap {
  id: FlagIconElement;
}

if (!customElements.get(id)) {
  customElements.define(id, FlagIconElement)
}
