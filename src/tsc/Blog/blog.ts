let BgTemplate = document.createElement('template');
BgTemplate.innerHTML = `
<h1>BLOG PAGE</h1>
`

export class Blog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(BgTemplate.content.cloneNode(true));

    }
}

customElements.define('blog-page', Blog);