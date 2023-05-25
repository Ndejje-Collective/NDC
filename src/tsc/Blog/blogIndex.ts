//verse of the day
import './bg-sections/verse';

//article 1
import './bg-sections/article1';

let BgTemplate = document.createElement('template');
BgTemplate.innerHTML = `
<bg-verse></bg-verse>
<bg-article1></bg-article1>
`;

export class Blog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(BgTemplate.content.cloneNode(true));
    }
}

customElements.define('blog-page', Blog);