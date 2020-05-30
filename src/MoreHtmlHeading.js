const template = document.createElement('template');
template.innerHTML = `
  <style>
    a.linkable {
      color: inherit;
      background: inherit;
      visibility: hidden;
      text-decoration: none;
    }
    a.linkable.show {
      visibility: visible;
    }
    :host(:hover) a.linkable {
      text-decoration: underline;
    }
  </style>
  <slot></slot>
  <a class="linkable">#</a>
`;

class MoreHtmlHeading extends HTMLHeadingElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const linkEl = this.shadowRoot.querySelector('.linkable');
    let id = this.id;
    if (!id) return;
    linkEl.setAttribute('href', `#${id}`);

    const showLinkable = () => this.shadowRoot.querySelector('.linkable').classList.add('show');
    const hideLinkable = () => this.shadowRoot.querySelector('.linkable').classList.remove('show');
    if (this.hasAttribute('show-link')) {
      showLinkable();
    } else {
      this.addEventListener('pointerover', showLinkable);
      this.addEventListener('pointerout', hideLinkable);
    }	
  }
}

customElements.define('more-h1', class extends MoreHtmlHeading {}, {extends: "h1"});
customElements.define('more-h2', class extends MoreHtmlHeading {}, {extends: "h2"});
customElements.define('more-h3', class extends MoreHtmlHeading {}, {extends: "h3"});
customElements.define('more-h4', class extends MoreHtmlHeading {}, {extends: "h4"});
customElements.define('more-h5', class extends MoreHtmlHeading {}, {extends: "h5"});
customElements.define('more-h6', class extends MoreHtmlHeading {}, {extends: "h6"});
